const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { initDatabase, getDb, run, get, all } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'commerce-ready-secret';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role || 'customer'
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token non fornito' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token non valido' });
  }
}

function adminMiddleware(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Permesso negato' });
  }
  next();
}

app.get('/api/health', (_, res) => {
  res.json({ ok: true, message: 'Commerce Ready API attiva' });
});

app.get('/api/products', async (req, res) => {
  try {
    const { q, category, minPrice, maxPrice, featured, sort } = req.query;
    let sql = 'SELECT * FROM products WHERE 1 = 1';
    const params = [];

    if (q) {
      sql += ' AND (name LIKE ? OR description LIKE ? OR category LIKE ?)';
      const needle = `%${q}%`;
      params.push(needle, needle, needle);
    }

    if (category) {
      sql += ' AND category = ?';
      params.push(category);
    }

    if (featured !== undefined) {
      sql += ' AND featured = ?';
      params.push(featured === 'true' ? 1 : 0);
    }

    if (minPrice) {
      sql += ' AND price >= ?';
      params.push(Number(minPrice));
    }

    if (maxPrice) {
      sql += ' AND price <= ?';
      params.push(Number(maxPrice));
    }

    if (sort === 'price_asc') {
      sql += ' ORDER BY price ASC';
    } else if (sort === 'price_desc') {
      sql += ' ORDER BY price DESC';
    } else if (sort === 'newest') {
      sql += ' ORDER BY created_at DESC';
    } else {
      sql += ' ORDER BY id DESC';
    }

    const products = await all(sql, params);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nel caricamento prodotti' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await get('SELECT * FROM products WHERE id = ?', [Number(req.params.id)]);
    if (!product) {
      return res.status(404).json({ message: 'Prodotto non trovato' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nel recupero prodotto' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Tutti i campi sono obbligatori' });
    }

    const existing = await get('SELECT * FROM users WHERE email = ?', [email]);
    if (existing) {
      return res.status(409).json({ message: 'Email già registrata' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await get(
      'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?) RETURNING *',
      [name, email, passwordHash, 'customer']
    );

    const token = generateToken(user);
    res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la registrazione' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email e password sono obbligatorie' });
    }

    const user = await get('SELECT * FROM users WHERE email = ?', [email]);
    if (!user) {
      return res.status(401).json({ message: 'Credenziali non valide' });
    }

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ message: 'Credenziali non valide' });
    }

    const token = generateToken(user);
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante il login' });
  }
});

app.get('/api/users/me', authMiddleware, async (req, res) => {
  try {
    const user = await get('SELECT id, name, email, role FROM users WHERE id = ?', [req.user.id]);
    if (!user) {
      return res.status(404).json({ message: 'Utente non trovato' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nel recupero utente' });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const { items, customerName, customerEmail, shippingMethod = 'standard' } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Nessun articolo nel carrello' });
    }

    const shippingCosts = { standard: 4.99, express: 9.99, pickup: 0 };
    const subtotal = items.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity || 1), 0);
    const shipping = shippingCosts[shippingMethod] || 0;
    const total = subtotal + shipping;

    const orderResult = await run(
      'INSERT INTO orders (customer_name, customer_email, shipping_method, subtotal, shipping_cost, total_amount) VALUES (?, ?, ?, ?, ?, ?)',
      [customerName || 'Guest', customerEmail || 'guest@commerce-ready.it', shippingMethod, subtotal, shipping, total]
    );

    const orderId = orderResult.id;

    for (const item of items) {
      await run(
        'INSERT INTO order_items (order_id, product_name, product_price, quantity, color, size) VALUES (?, ?, ?, ?, ?, ?)',
        [orderId, item.name, Number(item.price), Number(item.quantity || 1), item.color || '', item.size || '']
      );
    }

    res.status(201).json({
      message: 'Ordine creato con successo',
      order: {
        id: orderId,
        subtotal,
        shipping,
        total,
        items
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la creazione ordine' });
  }
});

app.get('/api/orders', authMiddleware, async (req, res) => {
  try {
    const orders = await all(
      `SELECT o.*, json_group_array(json_object('id', oi.id, 'product_name', oi.product_name, 'quantity', oi.quantity, 'price', oi.product_price)) as items
       FROM orders o
       LEFT JOIN order_items oi ON oi.order_id = o.id
       WHERE o.user_id = ? OR o.customer_email = ?
       GROUP BY o.id
       ORDER BY o.created_at DESC`,
      [req.user.id, req.user.email]
    );
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nel recupero ordini' });
  }
});

app.get('/api/admin/dashboard', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const products = await all('SELECT COUNT(*) as total_products FROM products');
    const orders = await all('SELECT COUNT(*) as total_orders FROM orders');
    const users = await all('SELECT COUNT(*) as total_users FROM users');

    res.json({
      stats: {
        totalProducts: products[0].total_products,
        totalOrders: orders[0].total_orders,
        totalUsers: users[0].total_users
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore dashboard admin' });
  }
});

app.get('/api/admin/products', authMiddleware, adminMiddleware, async (_, res) => {
  try {
    const products = await all('SELECT * FROM products ORDER BY id DESC');
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore recupero prodotti admin' });
  }
});

app.post('/api/admin/products', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { name, description, price, category, image_url, featured } = req.body;
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: 'Dati prodotti incompleti' });
    }

    const result = await run(
      'INSERT INTO products (name, description, price, category, image_url, featured) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, Number(price), category, image_url || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518', featured ? 1 : 0]
    );

    const product = await get('SELECT * FROM products WHERE id = ?', [result.id]);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore creazione prodotto' });
  }
});

app.put('/api/admin/products/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { name, description, price, category, image_url, featured } = req.body;
    const id = Number(req.params.id);

    await run(
      'UPDATE products SET name = ?, description = ?, price = ?, category = ?, image_url = ?, featured = ? WHERE id = ?',
      [name, description, Number(price), category, image_url || '', featured ? 1 : 0, id]
    );

    const product = await get('SELECT * FROM products WHERE id = ?', [id]);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore aggiorno prodotto' });
  }
});

app.delete('/api/admin/products/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await run('DELETE FROM products WHERE id = ?', [Number(req.params.id)]);
    res.json({ message: 'Prodotto eliminato' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore eliminazione prodotto' });
  }
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

async function startServer() {
  await initDatabase();
  app.listen(PORT, () => {
    console.log(`Commerce Ready server attivo su http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Errore di avvio server', error);
  process.exit(1);
});

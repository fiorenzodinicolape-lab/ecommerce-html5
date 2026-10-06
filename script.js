const CART_KEY = 'commerce-ready-cart';

function getCart() {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function updateCartUI() {
  const cart = getCart();
  const countEl = document.getElementById('cart-count');
  const panel = document.getElementById('cart-panel');
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (countEl) countEl.textContent = String(cart.length);

  if (itemsEl && totalEl) {
    if (!cart.length) {
      itemsEl.innerHTML = '<p class="empty-cart">Nessun articolo nel carrello.</p>';
      totalEl.textContent = '€0';
      return;
    }

    let total = 0;
    itemsEl.innerHTML = cart
      .map((item, index) => {
        total += Number(item.price || 0) * Number(item.quantity || 1);
        const details = item.color || item.size ? ` (${item.color || ''}${item.color && item.size ? ' / ' : ''}${item.size || ''})` : '';
        return `
          <div class="cart-item">
            <div>
              <h4>${item.name}${details}</h4>
              <span>€${Number(item.price || 0)} x ${item.quantity || 1}</span>
            </div>
            <button class="remove-item" data-index="${index}">Rimuovi</button>
          </div>
        `;
      })
      .join('');

    totalEl.textContent = `€${total}`;

    document.querySelectorAll('.remove-item').forEach((button) => {
      button.addEventListener('click', () => {
        const idx = Number(button.dataset.index);
        const current = getCart();
        current.splice(idx, 1);
        saveCart(current);
        updateCartUI();
      });
    });
  }

  if (panel && panel.classList && panel.classList.contains('open')) {
    panel.classList.add('open');
  }
}

function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
  updateCartUI();

  const panel = document.getElementById('cart-panel');
  if (panel) panel.classList.add('open');
}

window.CommerceCart = {
  getCart,
  saveCart,
  addToCart,
  updateCartUI,
  removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCartUI();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  const cartBtn = document.querySelector('.cart-btn');
  const closeCartBtn = document.getElementById('close-cart');
  const panel = document.getElementById('cart-panel');

  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      if (panel) panel.classList.add('open');
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      if (panel) panel.classList.remove('open');
    });
  }

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      addToCart({
        name: button.dataset.name || 'Prodotto',
        price: Number(button.dataset.price || 0),
        quantity: 1
      });
    });
  });

  document.querySelectorAll('.add-to-cart-large').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedColor = document.getElementById('selected-color')?.textContent || 'Bianco';
      const selectedSize = document.querySelector('.size-btn.active')?.textContent || 'S';
      const quantity = Number(document.getElementById('qty')?.value || 1);
      addToCart({
        name: 'Classic Tee',
        price: 49,
        color: selectedColor,
        size: selectedSize,
        quantity
      });
    });
  });

  if (document.querySelector('.checkout-btn')) {
    document.querySelector('.checkout-btn').addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
  }
});

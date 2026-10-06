<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dettaglio Prodotto - COMMERCE READY</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="header">
      <div class="container nav">
        <a href="index.html" class="brand">COMMERCE READY</a>
        <nav class="main-nav">
          <a href="index.html#new">Nuove uscite</a>
          <a href="index.html#featured">In evidenza</a>
          <a href="index.html#categories">Collezioni</a>
          <a href="contact.html">Contatti</a>
        </nav>
        <div class="nav-actions">
          <button class="icon-btn" aria-label="Cerca">⌕</button>
          <button class="icon-btn" aria-label="Utente" onclick="window.location.href='auth.html'">◌</button>
          <button class="cart-btn" aria-label="Carrello"><span>Carrello</span> <span id="cart-count">0</span></button>
        </div>
      </div>
    </header>

    <main>
      <nav class="breadcrumb container">
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="index.html#new">Prodotti</a>
        <span>/</span>
        <span id="product-breadcrumb">Dettaglio</span>
      </nav>

      <section class="product-detail container">
        <div class="product-gallery">
          <div class="main-image"><img id="main-img" src="" alt="Prodotto" /></div>
          <div class="thumbnail-grid">
            <button class="thumbnail active" data-src=""><img src="" alt="Thumbnail 1" /></button>
            <button class="thumbnail" data-src=""><img src="" alt="Thumbnail 2" /></button>
            <button class="thumbnail" data-src=""><img src="" alt="Thumbnail 3" /></button>
            <button class="thumbnail" data-src=""><img src="" alt="Thumbnail 4" /></button>
          </div>
        </div>

        <div class="product-info">
          <div class="info-header">
            <h1 id="product-name">Caricamento...</h1>
            <button class="wishlist-large" aria-label="Aggiungi ai preferiti">♡</button>
          </div>

          <div class="rating"><span class="stars">★★★★★</span> <span class="review-count">(124 recensioni)</span></div>
          <div class="price-section"><span class="price" id="product-price">€0</span> <span class="original-price">€69</span> <span class="discount">-29%</span></div>
          <p id="product-description" class="description"></p>

          <div class="options">
            <div class="option-group">
              <label>Colore</label>
              <div class="color-options">
                <button class="color-btn active" data-color="Bianco" style="background: #fff; border: 2px solid #0d4ecf;"></button>
                <button class="color-btn" data-color="Nero" style="background: #000;"></button>
                <button class="color-btn" data-color="Grigio" style="background: #999;"></button>
                <button class="color-btn" data-color="Blu" style="background: #0d4ecf;"></button>
              </div>
              <span id="selected-color">Bianco</span>
            </div>

            <div class="option-group">
              <label>Taglia</label>
              <div class="size-options">
                <button class="size-btn">XS</button>
                <button class="size-btn active">S</button>
                <button class="size-btn">M</button>
                <button class="size-btn">L</button>
                <button class="size-btn">XL</button>
                <button class="size-btn">XXL</button>
              </div>
            </div>

            <div class="option-group">
              <label>Quantità</label>
              <div class="quantity-selector">
                <button id="qty-minus" type="button">−</button>
                <input type="number" id="qty" value="1" min="1" max="10" />
                <button id="qty-plus" type="button">+</button>
              </div>
            </div>
          </div>

          <div class="actions">
            <button class="btn btn-primary add-to-cart-large" type="button">Aggiungi al carrello</button>
            <button class="btn btn-secondary" type="button">Compra subito</button>
          </div>

          <div class="shipping-info">
            <div><strong>📦 Spedizione gratuita</strong><p>Su ordini superiori a €50</p></div>
            <div><strong>↩ Reso facile</strong><p>30 giorni di reso gratuito</p></div>
            <div><strong>✓ Qualità garantita</strong><p>Prodotto certificato e verificato</p></div>
          </div>
        </div>
      </section>
    </main>

    <aside class="cart-panel" id="cart-panel">
      <div class="cart-header"><h3>Il tuo carrello</h3><button id="close-cart" aria-label="Chiudi carrello">✕</button></div>
      <div id="cart-items" class="cart-items"><p class="empty-cart">Nessun articolo nel carrello.</p></div>
      <div class="cart-footer"><div class="total-row"><span>Totale</span> <strong id="cart-total">€0</strong></div><button class="checkout-btn" onclick="window.location.href='checkout.html'">Vai alla cassa</button></div>
    </aside>

    <footer class="footer"><div class="container footer-content"><div><div class="brand">COMMERCE READY</div><p>Abbigliamento moderno per il tuo stile quotidiano.</p></div><div><h4>Compagnia</h4><a href="index.html">Home</a><a href="index.html#new">Novità</a><a href="contact.html">Contatti</a></div><div><h4>Supporto</h4><a href="#">FAQ</a><a href="#">Consegna</a><a href="#">Resi</a></div></div></footer>

    <script src="script.js"></script>
    <script src="product.js"></script>
  </body>
</html>

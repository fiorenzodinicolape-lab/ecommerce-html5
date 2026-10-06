<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Checkout - COMMERCE READY</title>
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

    <main class="checkout-page container">
      <div class="checkout-layout">
        <section class="checkout-form-wrap">
          <div class="section-header left-align">
            <div>
              <p class="eyebrow">Cassa</p>
              <h2>Completa il tuo ordine</h2>
            </div>
          </div>

          <form id="checkout-form" class="checkout-form">
            <div class="form-group-row">
              <div class="form-group"><label for="first-name">Nome</label><input id="first-name" type="text" required /></div>
              <div class="form-group"><label for="last-name">Cognome</label><input id="last-name" type="text" required /></div>
            </div>

            <div class="form-group"><label for="email">Email</label><input id="email" type="email" required /></div>
            <div class="form-group"><label for="address">Indirizzo</label><input id="address" type="text" required /></div>
            <div class="form-group-row">
              <div class="form-group"><label for="city">Città</label><input id="city" type="text" required /></div>
              <div class="form-group"><label for="postal-code">CAP</label><input id="postal-code" type="text" required /></div>
            </div>

            <div class="form-group"><label for="shipping-method">Metodo spedizione</label>
              <select id="shipping-method">
                <option value="standard">Standard - €4.99</option>
                <option value="express">Express - €9.99</option>
                <option value="pickup">Ritiro in negozio - Gratis</option>
              </select>
            </div>

            <button class="btn btn-primary btn-block" type="submit">Conferma ordine</button>
          </form>
        </section>

        <aside class="checkout-summary">
          <h3>Riepilogo ordine</h3>
          <div id="checkout-items" class="checkout-items"></div>
          <div class="summary-totals">
            <div class="summary-row"><span>Subtotale</span> <strong id="summary-subtotal">€0</strong></div>
            <div class="summary-row"><span>Spedizione</span> <strong id="summary-shipping">€0</strong></div>
            <div class="summary-row total"><span>Totale</span> <strong id="summary-total">€0</strong></div>
          </div>
        </aside>
      </div>
    </main>

    <aside class="cart-panel" id="cart-panel" aria-live="polite">
      <div class="cart-header"><h3>Il tuo carrello</h3><button id="close-cart" aria-label="Chiudi carrello">✕</button></div>
      <div id="cart-items" class="cart-items"><p class="empty-cart">Nessun articolo nel carrello.</p></div>
      <div class="cart-footer"><div class="total-row"><span>Totale</span> <strong id="cart-total">€0</strong></div><button class="checkout-btn" onclick="window.location.href='checkout.html'">Vai alla cassa</button></div>
    </aside>

    <footer class="footer"><div class="container footer-content"><div><div class="brand">COMMERCE READY</div><p>Abbigliamento moderno per il tuo stile quotidiano.</p></div><div><h4>Compagnia</h4><a href="index.html">Home</a><a href="index.html#new">Novità</a><a href="contact.html">Contatti</a></div><div><h4>Supporto</h4><a href="#">FAQ</a><a href="#">Consegna</a><a href="#">Resi</a></div></div></footer>

    <script src="script.js"></script>
    <script src="checkout.js"></script>
  </body>
</html>

<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contatti - COMMERCE READY</title>
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

    <main class="contact-page container">
      <section class="contact-hero">
        <div>
          <p class="eyebrow">Contatti</p>
          <h1>Parliamo del tuo prossimo look</h1>
          <p>Se hai domande sui prodotti, sulle spedizioni o sui resi, siamo qui per aiutarti.</p>
        </div>
      </section>

      <section class="contact-layout">
        <div class="contact-card">
          <h3>Scrivici</h3>
          <form id="contact-form" class="contact-form">
            <div class="form-group"><label for="contact-name">Nome</label><input id="contact-name" type="text" required /></div>
            <div class="form-group"><label for="contact-email">Email</label><input id="contact-email" type="email" required /></div>
            <div class="form-group"><label for="contact-message">Messaggio</label><textarea id="contact-message" rows="5" required></textarea></div>
            <button class="btn btn-primary btn-block" type="submit">Invia messaggio</button>
          </form>
          <div class="success-message" id="contact-success" hidden>Messaggio inviato con successo! Ti risponderemo al più presto.</div>
        </div>

        <div class="contact-info">
          <div class="info-box">
            <h3>Informazioni</h3>
            <p><strong>Email:</strong> hello@commerceready.it</p>
            <p><strong>Telefono:</strong> +39 02 1234 5678</p>
            <p><strong>Orari:</strong> Lun-Ven 9:00 - 18:00</p>
            <p><strong>Indirizzo:</strong> Via Milano 25, 20100 Milano</p>
          </div>
          <div class="info-box social-box">
            <h3>Seguici</h3>
            <div class="social-icons"><span>Instagram</span><span>Facebook</span><span>Pinterest</span></div>
          </div>
        </div>
      </section>
    </main>

    <aside class="cart-panel" id="cart-panel" aria-live="polite">
      <div class="cart-header"><h3>Il tuo carrello</h3><button id="close-cart" aria-label="Chiudi carrello">✕</button></div>
      <div id="cart-items" class="cart-items"><p class="empty-cart">Nessun articolo nel carrello.</p></div>
      <div class="cart-footer"><div class="total-row"><span>Totale</span> <strong id="cart-total">€0</strong></div><button class="checkout-btn" onclick="window.location.href='checkout.html'">Vai alla cassa</button></div>
    </aside>

    <footer class="footer"><div class="container footer-content"><div><div class="brand">COMMERCE READY</div><p>Abbigliamento moderno per il tuo stile quotidiano.</p></div><div><h4>Compagnia</h4><a href="index.html">Home</a><a href="index.html#new">Novità</a><a href="checkout.html">Checkout</a></div><div><h4>Supporto</h4><a href="index.html#about">Chi siamo</a><a href="#">FAQ</a><a href="#">Resi</a></div></div></footer>

    <script src="script.js"></script>
    <script src="contact.js"></script>
  </body>
</html>

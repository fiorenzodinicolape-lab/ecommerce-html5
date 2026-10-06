<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Accesso - COMMERCE READY</title>
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
          <button class="icon-btn" aria-label="Utente">◌</button>
          <button class="cart-btn" aria-label="Carrello"><span>Carrello</span> <span id="cart-count">0</span></button>
        </div>
      </div>
    </header>

    <main class="auth-page container">
      <div class="auth-panel">
        <div class="auth-tabs">
          <button class="auth-tab active" data-tab="login" type="button">Accedi</button>
          <button class="auth-tab" data-tab="register" type="button">Registrati</button>
        </div>

        <form id="login-form" class="auth-form active-form">
          <div class="form-group">
            <label for="login-email">Email</label>
            <input id="login-email" type="email" required />
          </div>
          <div class="form-group">
            <label for="login-password">Password</label>
            <input id="login-password" type="password" required />
          </div>
          <button class="btn btn-primary btn-block" type="submit">Accedi</button>
        </form>

        <form id="register-form" class="auth-form" hidden>
          <div class="form-group">
            <label for="register-name">Nome</label>
            <input id="register-name" type="text" required />
          </div>
          <div class="form-group">
            <label for="register-email">Email</label>
            <input id="register-email" type="email" required />
          </div>
          <div class="form-group">
            <label for="register-password">Password</label>
            <input id="register-password" type="password" required />
          </div>
          <button class="btn btn-primary btn-block" type="submit">Registrati</button>
        </form>
      </div>
    </main>

    <script src="script.js"></script>
    <script src="auth.js"></script>
  </body>
</html>

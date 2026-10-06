* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #f6f9ff 0%, #eef4ff 100%);
  color: #122033;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
button, input, textarea, select { font: inherit; }
button { cursor: pointer; border: none; }

.container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }
.header {
  position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(173,196,255,0.5);
}
.nav { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 18px 0; }
.brand { font-size: 1.3rem; font-weight: 900; letter-spacing: 0.12em; color: #0a3ca2; }
.main-nav { display: flex; gap: 28px; font-size: 0.95rem; font-weight: 500; color: #5d6f86; }
.main-nav a:hover { color: #0d4ecf; }
.nav-actions { display: flex; align-items: center; gap: 12px; }
.icon-btn {
  width: 42px; height: 42px; border-radius: 50%; background: #fff; border: 1px solid #dfe9ff; color: #122033;
}
.cart-btn { background: #0d4ecf; color: #fff; border-radius: 999px; padding: 0.8rem 1.2rem; font-weight: 700; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 20px 40px rgba(13,78,207,0.12); }
#cart-count { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.25); font-size: 0.8rem; }
.hero { padding: 60px 0 30px; }
.hero-content { display: grid; grid-template-columns: 1.1fr 0.9fr; align-items: center; gap: 36px; }
.eyebrow { text-transform: uppercase; letter-spacing: 0.14em; color: #0d4ecf; font-size: 0.76rem; font-weight: 700; margin-bottom: 16px; }
.hero-copy h1 { margin: 0; font-size: clamp(2.6rem, 5vw, 5rem); line-height: 1.02; letter-spacing: -0.06em; }
.hero-copy p { color: #5d6f86; font-size: 1.08rem; line-height: 1.8; max-width: 560px; margin-top: 18px; }
.hero-actions { display: flex; align-items: center; gap: 16px; margin-top: 28px; }
.btn { display: inline-flex; align-items: center; justify-content: center; min-height: 52px; padding: 0 1.4rem; border-radius: 999px; font-weight: 700; transition: 0.2s ease; }
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: #0d4ecf; color: #fff; box-shadow: 0 16px 30px rgba(13,78,207,0.2); }
.btn-secondary { background: rgba(13,78,207,0.08); color: #0a3ca2; }
.search-tools { padding: 12px 0 20px; }
.search-bar-wrap, .filters-row { display: flex; gap: 12px; margin-bottom: 16px; }
.search-bar-wrap input, .filters-row input, .filters-row select {
  width: 100%; min-height: 52px; border: 1px solid #dfe9ff; border-radius: 14px; padding: 0 16px; background: #fff; }
.search-bar-wrap input { flex: 1; }
.search-bar-wrap button { white-space: nowrap; }

.brands { display: grid; grid-template-columns: repeat(5, minmax(110px, 1fr)); gap: 18px; align-items: center; padding: 26px 0; color: #8396b5; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; }
.brands span { text-align: center; }
.section { padding: 80px 0; }
.section-header { display: flex; justify-content: space-between; align-items: end; gap: 16px; margin-bottom: 26px; }
.section-header h2 { margin: 0; font-size: clamp(2rem, 3vw, 3rem); letter-spacing: -0.06em; }
.link-btn { color: #0d4ecf; font-weight: 700; }
.product-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 22px; }
.product-item { background: rgba(255,255,255,0.7); border: 1px solid #dfe9ff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 35px rgba(18,32,51,0.04); }
.product-image { position: relative; }
.product-image img { width: 100%; height: 330px; object-fit: cover; }
.wishlist { position: absolute; top: 16px; right: 16px; width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.9); border: 1px solid rgba(13,78,207,0.08); color: #0a3ca2; font-size: 1.2rem; }
.product-info { padding: 18px 18px 20px; }
.meta-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.tag { display: inline-flex; align-items: center; min-height: 30px; border-radius: 999px; padding: 0 12px; background: #eaf2ff; color: #0a3ca2; font-weight: 700; font-size: 0.7rem; }
.price { font-weight: 800; font-size: 1.1rem; color: #122033; }
.product-info h3 { margin: 16px 0 8px; font-size: 1.4rem; }
.product-info p { margin: 0 0 18px; color: #5d6f86; }
.add-to-cart { width: 100%; min-height: 48px; border-radius: 14px; background: #0d4ecf; color: #fff; font-weight: 700; }
.promo-band { background: linear-gradient(135deg, #dfeeff 0%, #edf4ff 100%); padding: 80px 0; }
.promo-content { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.promo-content h2 { margin: 0; font-size: clamp(2rem, 3vw, 3rem); letter-spacing: -0.05em; }
.category-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.category-card { position: relative; overflow: hidden; border-radius: 26px; min-height: 360px; box-shadow: 0 14px 30px rgba(17,19,31,0.06); }
.category-card img { width: 100%; height: 100%; object-fit: cover; }
.category-card > div { position: absolute; inset: auto 0 0 0; background: linear-gradient(180deg, rgba(11,27,58,0) 0%, rgba(11,27,58,0.8) 100%); color: #fff; padding: 24px; }
.category-card h3 { margin: 0 0 4px; font-size: 1.9rem; }
.testimonial-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 22px; }
.testimonial-grid blockquote { margin: 0; padding: 24px 22px; background: rgba(255,255,255,0.7); border: 1px solid #dfe9ff; border-radius: 20px; line-height: 1.8; }
.testimonial-grid footer { margin-top: 18px; color: #0a3ca2; font-weight: 700; }
.cart-panel {
  position: fixed; top: 0; right: 0; width: min(420px, 100%); height: 100vh; background: #fff; box-shadow: -25px 0 40px rgba(17,19,31,0.12); transform: translateX(110%); transition: transform 0.25s ease; z-index: 100; display: flex; flex-direction: column;
}
.cart-panel.open { transform: translateX(0); }
.cart-header, .cart-footer { padding: 20px 22px; border-bottom: 1px solid #dfe9ff; }
.cart-header { display: flex; align-items: center; justify-content: space-between; }
.cart-header h3 { margin: 0; }
#close-cart { width: 36px; height: 36px; border-radius: 50%; background: #f0f4ff; color: #122033; }
.cart-items { flex: 1; overflow: auto; padding: 18px 22px; }
.empty-cart { margin: 0; color: #5d6f86; }
.cart-item { display: flex; justify-content: space-between; gap: 14px; padding: 14px 0; border-bottom: 1px solid #dfe9ff; }
.cart-item h4 { margin: 0 0 6px; font-size: 1rem; }
.cart-item span { color: #5d6f86; font-size: 0.85rem; }
.remove-item { background: transparent; color: #0a3ca2; font-weight: 700; }
.total-row { display: flex; align-items: center; justify-content: space-between; font-size: 1.05rem; }
.checkout-btn { width: 100%; min-height: 52px; margin-top: 16px; border-radius: 14px; background: #0d4ecf; color: #fff; font-weight: 800; }
.footer { background: #0e1832; color: rgba(255,255,255,0.82); padding: 42px 0; }
.footer-content { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 24px; }
.footer-content h4 { margin: 0 0 12px; color: #fff; }
.footer-content a { display: block; color: rgba(255,255,255,0.72); margin-bottom: 8px; }
.footer-content p { color: rgba(255,255,255,0.72); max-width: 420px; line-height: 1.8; }

.breadcrumb { display: flex; gap: 8px; align-items: center; color: #5d6f86; font-size: 0.9rem; padding-top: 28px; }
.product-detail { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 42px; padding-top: 28px; }
.product-gallery { display: flex; flex-direction: column; gap: 16px; }
.main-image img { width: 100%; height: 640px; object-fit: cover; border-radius: 28px; box-shadow: 0 20px 40px rgba(13,78,207,0.12); }
.thumbnail-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
.thumbnail { padding: 0; border-radius: 14px; overflow: hidden; border: 2px solid transparent; background: transparent; }
.thumbnail.active { border-color: #0d4ecf; }
.thumbnail img { width: 100%; height: 100px; object-fit: cover; }
.product-info { background: rgba(255,255,255,0.7); border: 1px solid #dfe9ff; border-radius: 28px; padding: 26px; }
.info-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.info-header h1 { margin: 0; font-size: clamp(2rem, 3vw, 3rem); letter-spacing: -0.06em; }
.rating { margin-top: 14px; display: flex; align-items: center; gap: 10px; }
.stars { color: #f7b955; letter-spacing: 0.16em; }
.review-count { color: #5d6f86; font-size: 0.9rem; }
.price-section { display: flex; align-items: center; gap: 12px; margin-top: 18px; }
.price-section .price { font-size: 2rem; color: #0a3ca2; }
.original-price { text-decoration: line-through; color: #5d6f86; font-weight: 600; }
.discount { background: #ecfdf5; color: #067647; border-radius: 999px; font-weight: 700; padding: 6px 10px; font-size: 0.75rem; }
.description { line-height: 1.8; color: #5d6f86; margin-top: 20px; }
.options { margin-top: 24px; display: grid; gap: 20px; }
.option-group { display: flex; flex-direction: column; gap: 10px; }
.option-group label { font-weight: 700; }
.color-options, .size-options { display: flex; gap: 10px; flex-wrap: wrap; }
.color-btn { width: 36px; height: 36px; border-radius: 50%; border: 2px solid transparent; }
.color-btn.active { box-shadow: 0 0 0 3px rgba(13,78,207,0.2); }
.size-btn { min-width: 48px; min-height: 42px; border-radius: 10px; background: #f1f5ff; color: #122033; font-weight: 700; }
.size-btn.active { background: #0d4ecf; color: #fff; }
.quantity-selector { display: flex; align-items: center; width: max-content; border: 1px solid #dfe9ff; border-radius: 12px; overflow: hidden; }
.quantity-selector button { width: 42px; height: 42px; background: #f3f6ff; color: #122033; font-size: 1.3rem; }
.quantity-selector input { width: 64px; height: 42px; border: none; border-left: 1px solid #dfe9ff; border-right: 1px solid #dfe9ff; text-align: center; background: #fff; font-weight: 700; color: #122033; }
.actions { display: flex; gap: 14px; margin-top: 22px; }
.shipping-info { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 16px; margin-top: 24px; border-top: 1px solid #dfe9ff; border-bottom: 1px solid #dfe9ff; padding: 18px 0; }
.shipping-info p { margin: 6px 0 0; color: #5d6f86; font-size: 0.82rem; }
.product-details { margin-top: 22px; border: 1px solid #dfe9ff; border-radius: 16px; padding: 12px 16px; }
.product-details summary { cursor: pointer; font-weight: 700; }
.product-details div { color: #5d6f86; line-height: 1.8; padding-top: 12px; }
.reviews-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 22px; }
.review-card { background: rgba(255,255,255,0.7); border: 1px solid #dfe9ff; border-radius: 20px; padding: 20px; }
.review-header { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.review-card h4 { margin: 14px 0 10px; }
.review-card p { margin: 0; color: #5d6f86; line-height: 1.7; }
.checkout-layout { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 28px; }
.checkout-form-wrap, .checkout-summary { background: rgba(255,255,255,0.7); border: 1px solid #dfe9ff; border-radius: 24px; padding: 24px; }
.checkout-form { display: grid; gap: 18px; }
.form-group-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: grid; gap: 8px; }
.form-group label { font-weight: 700; }
.form-group input, .form-group textarea, .form-group select {
  width: 100%; border: 1px solid #dfe9ff; border-radius: 12px; padding: 12px 14px; background: #fff; color: #122033;
}
.checkout-summary h3 { margin-top: 0; font-size: 1.8rem; }
.checkout-items { display: grid; gap: 14px; margin-top: 20px; }
.checkout-item { display: flex; justify-content: space-between; gap: 12px; }
.checkout-item .meta { color: #5d6f86; font-size: 0.82rem; }
.summary-totals { margin-top: 24px; display: grid; gap: 12px; border-top: 1px solid #dfe9ff; padding-top: 18px; }
.summary-row.total { font-size: 1.2rem; }
.contact-page, .checkout-page { padding: 60px 0; }
.contact-hero { padding-bottom: 18px; }
.contact-hero h1 { margin: 0; font-size: clamp(2.2rem, 4vw, 4rem); }
.contact-hero p { color: #5d6f86; line-height: 1.8; }
.contact-layout { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 28px; }
.contact-card, .info-box { background: rgba(255,255,255,0.7); border: 1px solid #dfe9ff; border-radius: 24px; padding: 24px; }
.contact-form { display: grid; gap: 18px; }
.contact-info { display: grid; gap: 18px; }
.social-box .social-icons { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
.social-icons span { background: #eaf2ff; color: #0a3ca2; border-radius: 999px; padding: 8px 12px; font-weight: 700; }
.success-message { margin-top: 16px; background: #ecfdf5; color: #06643b; border: 1px solid #a7f3d0; border-radius: 12px; padding: 12px 14px; font-weight: 600; }
.auth-page { padding: 80px 0; }
.auth-panel { max-width: 520px; margin: 0 auto; background: rgba(255,255,255,0.7); border: 1px solid #dfe9ff; border-radius: 24px; padding: 24px; }
.auth-tabs { display: flex; gap: 12px; margin-bottom: 22px; }
.auth-tab { flex: 1; min-height: 48px; border-radius: 12px; background: #edf3ff; color: #0a3ca2; font-weight: 700; }
.auth-tab.active { background: #0d4ecf; color: #fff; }
.auth-form { display: grid; gap: 16px; }
.auth-form input { width: 100%; min-height: 52px; border: 1px solid #dfe9ff; border-radius: 12px; padding: 0 16px; }

@media (max-width: 980px) {
  .hero-content, .product-detail, .checkout-layout, .contact-layout, .product-grid, .testimonial-grid, .footer-content { grid-template-columns: 1fr 1fr; }
  .hero-content { display: block; }
  .hero-visual { margin-top: 30px; }
  .main-nav { display: none; }
  .category-grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .product-grid, .testimonial-grid, .footer-content, .brands, .reviews-grid, .form-group-row, .shipping-info, .contact-layout, .checkout-layout { grid-template-columns: 1fr; }
  .nav { flex-wrap: wrap; }
  .brand { width: 100%; text-align: center; }
  .nav-actions { width: 100%; justify-content: space-between; }
  .stats { gap: 18px; }
  .promo-content, .section-header, .actions { display: block; }
  .promo-content .btn { margin-top: 18px; }
  .actions .btn { width: 100%; margin-bottom: 10px; }
  .main-image img { height: 420px; }
  .search-bar-wrap, .filters-row { flex-direction: column; }
}

document.addEventListener('DOMContentLoaded', () => {
  const checkoutItems = document.getElementById('checkout-items');
  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const totalEl = document.getElementById('summary-total');
  const shippingMethod = document.getElementById('shipping-method');

  function renderCheckout() {
    const cart = window.CommerceCart.getCart();

    if (!checkoutItems) return;

    if (!cart.length) {
      checkoutItems.innerHTML = '<p class="empty-cart">Il tuo carrello è vuoto.</p>';
      subtotalEl.textContent = '€0';
      shippingEl.textContent = '€0';
      totalEl.textContent = '€0';
      return;
    }

    let subtotal = 0;
    checkoutItems.innerHTML = cart
      .map((item) => {
        const qty = Number(item.quantity || 1);
        const price = Number(item.price || 0) * qty;
        subtotal += price;
        const details = item.color || item.size ? ` (${item.color || ''}${item.color && item.size ? ' / ' : ''}${item.size || ''})` : '';
        return `
          <div class="checkout-item">
            <div>
              <strong>${item.name}${details}</strong>
              <div class="meta">Quantità: ${qty}</div>
            </div>
            <strong>€${price}</strong>
          </div>
        `;
      })
      .join('');

    subtotalEl.textContent = `€${subtotal}`;
    updateShipping();
  }

  function updateShipping() {
    const shippingCosts = {
      standard: 4.99,
      express: 9.99,
      pickup: 0
    };

    const selected = shippingMethod ? shippingMethod.value : 'standard';
    const shipping = shippingCosts[selected] || 0;
    const subtotal = Number((subtotalEl.textContent || '€0').replace(/[^0-9.]/g, '')) || 0;

    shippingEl.textContent = `€${shipping.toFixed(2)}`;
    totalEl.textContent = `€${(subtotal + shipping).toFixed(2)}`;
  }

  if (shippingMethod) {
    shippingMethod.addEventListener('change', updateShipping);
  }

  renderCheckout();

  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const cart = window.CommerceCart.getCart();
      if (!cart.length) {
        alert('Il tuo carrello è vuoto.');
        return;
      }
      alert('Ordine confermato! Grazie per aver acquistato da COMMERCE READY.');
      localStorage.removeItem('commerce-ready-cart');
      window.CommerceCart.updateCartUI();
      form.reset();
      renderCheckout();
    });
  }
});

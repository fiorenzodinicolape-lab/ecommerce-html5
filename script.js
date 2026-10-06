const cart = [];

const cartPanel = document.getElementById('cart-panel');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.getElementById('close-cart');

function updateCart() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Nessun articolo nel carrello.</p>';
    cartTotal.textContent = '€0';
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart
    .map(
      (item, index) => {
        total += item.price;
        return `
          <div class="cart-item">
            <div>
              <h4>${item.name}</h4>
              <span>€${item.price}</span>
            </div>
            <button class="remove-item" data-index="${index}">Rimuovi</button>
          </div>
        `;
      }
    )
    .join('');

  cartTotal.textContent = `€${total}`;

  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = Number(event.target.dataset.index);
      cart.splice(index, 1);
      updateCart();
    });
  });
}

cartBtn.addEventListener('click', () => {
  cartPanel.classList.add('open');
});

closeCartBtn.addEventListener('click', () => {
  cartPanel.classList.remove('open');
});

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    cart.push({ name, price });
    updateCart();
    cartPanel.classList.add('open');
  });
});

updateCart();




















document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('main-img');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const colorButtons = document.querySelectorAll('.color-btn');
  const sizeButtons = document.querySelectorAll('.size-btn');
  const qtyInput = document.getElementById('qty');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const selectedColor = document.getElementById('selected-color');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach((item) => item.classList.remove('active'));
      thumb.classList.add('active');
      if (mainImage && thumb.dataset.src) mainImage.src = thumb.dataset.src;
    });
  });

  colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      colorButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      if (selectedColor) selectedColor.textContent = button.dataset.color || 'Bianco';
    });
  });

  sizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      sizeButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });

  if (qtyMinus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      const val = Number(qtyInput.value || 1);
      qtyInput.value = Math.max(1, val - 1);
    });
  }

  if (qtyPlus && qtyInput) {
    qtyPlus.addEventListener('click', () => {
      const val = Number(qtyInput.value || 1);
      qtyInput.value = Math.min(10, val + 1);
    });
  }

  const addLargeButton = document.querySelector('.add-to-cart-large');
  if (addLargeButton) {
    addLargeButton.addEventListener('click', () => {
      const color = document.getElementById('selected-color')?.textContent || 'Bianco';
      const size = document.querySelector('.size-btn.active')?.textContent || 'S';
      const quantity = Number(document.getElementById('qty')?.value || 1);
      window.CommerceCart.addToCart({
        name: 'Classic Tee',
        price: 49,
        color,
        size,
        quantity
      });
    });
  }
});

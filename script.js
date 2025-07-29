function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if item already in cart
  let existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if the item is already in the cart
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} ถูกเพิ่มในตะกร้าแล้ว!`);
}

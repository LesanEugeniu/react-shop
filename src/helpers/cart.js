export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function clearCart() {
  localStorage.setItem("cart", "[]");
}

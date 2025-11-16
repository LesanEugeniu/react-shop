const STORAGE_KEY = 'cart';

export function getItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function addItem(item) {
  const items = getItems();
  const existing = items.find((i) => i.id === item.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + (item.quantity || 1);
  } else {
    items.push({ ...item, quantity: item.quantity || 1 });
  }
  saveItems(items);
}

export function removeItem(id) {
  const items = getItems().filter((i) => i.id !== id);
  saveItems(items);
}

export function updateQuantity(id, quantity) {
  const items = getItems();
  const it = items.find((i) => i.id === id);
  if (it) {
    it.quantity = Math.max(0, quantity);
    saveItems(items);
  }
}

export function clearCart() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getTotals() {
  const items = getItems();
  const subtotal = items.reduce((s, it) => s + (it.price || 0) * (it.quantity || 1), 0);
  return { subtotal, delivery: 20, total: subtotal + 20 };
}

export default { getItems, addItem, removeItem, updateQuantity, clearCart, getTotals };

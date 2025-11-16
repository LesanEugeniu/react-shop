import React, { useState, useEffect } from "react";
import { getCart, clearCart, addToCart } from "../helpers/cart";
import "../assets/styles/cart.css";
import ArrowCart from "../assets/media/Arrow-cart.svg";
import TrashIcon from "../assets/media/trash.png";

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getCart());
  }, []);

  const increment = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decrement = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p));
  };

  const removeProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setProducts(updated);
  };

  const subTotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const deliveryFee = products.length > 0 ? 20 : 0;
  const total = subTotal + deliveryFee;

  const handleCheckout = () => {
    clearCart();
    setProducts([]);
  };

  return (
    <div className="container-1">
      <div className="proc-100-width">
        <button className="back-to-prev" onClick={() => window.history.back()}>
          <img className="cart-arrow" src={ArrowCart} alt="Cart" />
          <p className="cart-arrow-text">Cart</p>
        </button>
      </div>

      <div className="produse-and-achit">
        <div className="sect-produse">
          {products.map((product) => (
            <div key={product.id} className="produs-cart">
              <img className="prod-cart-image" src={product.src || product.image} alt={product.name} />
              <p className="prod-cart-text">{product.name}</p>

              <div className="btn-plus-minus">
                <p className="prod-cart-text minus" onClick={() => decrement(product.id)}>-</p>
                <p className="prod-cart-text">{product.quantity}</p>
                <p className="prod-cart-text plus" onClick={() => increment(product.id)}>+</p>
              </div>

              <p className="prod-cart-text">Price ${product.price * product.quantity}</p>
              <img className="prod-cart-trash" src={TrashIcon} alt="Remove" onClick={() => removeProduct(product.id)} />
            </div>
          ))}
        </div>

        <div className="sect-achit">
          <div className="buy-menu-sect buy-menu-sect-1">
            <div className="order-summary">
              <p className="buy-menu-text">Order Summary</p>
            </div>
            <div className="sub-total">
              <p className="buy-menu-text">Sub Total</p>
              <p className="buy-menu-text sub-total-price">${subTotal}</p>
            </div>
            <div className="delivery">
              <p className="buy-menu-text">Delivery</p>
              <p className="buy-menu-text livrarea">${deliveryFee}</p>
            </div>
          </div>

          <div className="buy-menu-sect buy-menu-sect-2">
            <div className="total">
              <p className="buy-menu-text">Total</p>
              <p className="buy-menu-text pretul-final">${total}</p>
            </div>
            <div className="btn-check">
              <button className="btn-checkout-black Checkout-Checkout" onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

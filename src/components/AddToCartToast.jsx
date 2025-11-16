import React, { useEffect } from "react";
import "../assets/styles/toast.css";

export default function AddToCartToast({ toasts, removeToast }) {
  return (
    <div className="toast-stack">
      {toasts.map((t) => (
        <div key={t.id} className="toast-wrapper show">
          <div className="toast-card">
            <div className="toast-icon">
              <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div className="toast-content">
              <p className="toast-title">Added to Cart</p>
              <p className="toast-desc">{t.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

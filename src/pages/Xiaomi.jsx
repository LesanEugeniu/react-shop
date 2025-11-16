import React from "react";
import products from "../data/products";
import InfoModal from "../components/InfoModal";
import AddToCartToast from "../components/AddToCartToast";
import "../assets/styles/xiaomi.css";
import { addItem } from "../lib/cart";

export default function Xiaomi() {
  const [toasts, setToasts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({ title: "", description: "" });

  const xiaomiList = [
    "xiaomi12-pro",
    "xiaomi12",
    "xiaomi11-lite",
    "redmi10"
  ];

  function handleAdd(p) {
    addItem({ ...p, quantity: 1 });
    const id = Date.now();

    setToasts(prev => [...prev, { id, name: p.name }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2000);
  }

  function handleLearnMore(p) {
    setModalInfo({ title: p.name, description: p.description || "Premium performance and design." });
    setModalOpen(true);
  }

  return (
    <>
      {xiaomiList.map((id) => {
        const p = products[id];
        return (
          <div
            key={id}
            id={`Section-${id}`}
            className={`${id}`}>

            <div className="description-wrapper" data-aos="fade-up">
              <p>{p.name}</p>

              <p>{p.description || "Premium performance and design."}</p>

              <p className="price-white">From ${p.price}</p>

              <div className="buy-learnmore">
                <button className="btn-buy-white" onClick={() => handleAdd(p)}>
                  Buy
                </button>

                <button className="more-info" onClick={() => handleLearnMore(p)}>
                  Learn more &gt;
                </button>
              </div>
            </div>

            <img
              className="xiaomi-image"
              src={p.src}
              alt={p.name}
              data-aos="fade-up"
            />
          </div>
        );
      })}
      <InfoModal open={modalOpen} onClose={() => setModalOpen(false)} title={modalInfo.title} description={modalInfo.description} />
      <AddToCartToast toasts={toasts} removeToast={(id) => setToasts(prev => prev.filter(t => t.id !== id))} />
    </>
  );
}

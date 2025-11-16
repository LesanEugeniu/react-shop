import React from "react";
import AddToCartToast from "../components/AddToCartToast";
import products from "../data/products";
import InfoModal from "../components/InfoModal";
import "../assets/styles/samsung-mob.css";
import { addItem } from "../lib/cart";

export default function Samsung() {
  const [toasts, setToasts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({ title: "", description: "" });

  const galaxyList = ["galaxy-fold3", "galaxy-s22ultra", "galaxy-s21"];

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
      {galaxyList.map((id, index) => {
        const p = products[id];
        if (!p) return null;

        return (
          <div key={id} className={`${id}`} id={`${id}`}>
            {index % 2 === 0 && (
              <img
                src={p.src}
                alt={p.name}
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            )}

            <div className="description-wrapper" data-aos="fade-up" data-aos-duration="1500">
              <p>{p.name}</p>
              <p>{p.description || "Premium performance and design."}</p>
              <p>From ${p.price}</p>
              <div className="buy-learnmore">
                <button className={`btn-buy-white btn-buy-${id}`} onClick={() => handleAdd(p)}>
                  Buy
                </button>
                <button className={`more-info btn-learn-${id}`} onClick={() => handleLearnMore(p)}>
                  Learn more &gt;
                </button>
              </div>
            </div>

            {index % 2 === 1 && (
              <img
                src={p.src}
                alt={p.name}
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            )}
          </div>
        );
      })}
      <InfoModal open={modalOpen} onClose={() => setModalOpen(false)} title={modalInfo.title} description={modalInfo.description} />
      <AddToCartToast toasts={toasts} removeToast={(id) => setToasts(prev => prev.filter(t => t.id !== id))} />
    </>
  );
}

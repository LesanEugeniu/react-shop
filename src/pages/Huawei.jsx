import React from "react";
import products from "../data/products";
import { addItem } from "../lib/cart";
import InfoModal from "../components/InfoModal";
import "../assets/styles/huawei-mob.css";
import AddToCartToast from "../components/AddToCartToast";

export default function Huawei() {
  const [toasts, setToasts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({ title: "", description: "" });

  const huaweiList = ["huawei-p50-pocket", "huawei-nova9", "huawei-p30-pro"];

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
      {huaweiList.map((id) => {
        const p = products[id];
        if (!p) return null;

        return (
          <div key={id} className={id} id={`Section-${id}`}>
            <div className="description-wrapper" data-aos="fade-up" data-aos-duration="1500">
              <p>{p.name}</p>
              <p>{p.description || "Premium performance and design."}</p>
              <p>From ${p.price}</p>
              <div className="buy-learnmore">
                <button className={`btn-buy-white btn-buy-${id}`} onClick={() => handleAdd(p)}>
                  Buy
                </button>
                <button className="more-info" onClick={() => handleLearnMore(p)}>
                  Learn more &gt;
                </button>
              </div>
            </div>

            <img
              src={p.src}
              alt={p.name}
              className={`${id}-Image`}
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
        );
      })}
      <InfoModal open={modalOpen} onClose={() => setModalOpen(false)} title={modalInfo.title} description={modalInfo.description} />
      <AddToCartToast toasts={toasts} removeToast={(id) => setToasts(prev => prev.filter(t => t.id !== id))} />
    </>
  );
}

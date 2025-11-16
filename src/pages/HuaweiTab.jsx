import React from "react";
import InfoModal from "../components/InfoModal";
import products from "../data/products";
import { addItem } from "../lib/cart";
import "../assets/styles/huawei-tab.css";
import AddToCartToast from "../components/AddToCartToast";

export default function HuaweiTablets() {
  const [toasts, setToasts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({ title: "", description: "" });

  const huaweiTabs = [
    "huawei-matepad-pro",
    "huawei-matepad-11",
    "huawei-matepad-paper"
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
      {huaweiTabs.map((id) => {
        const p = products[id];
        if (!p) return null;

        return (
          <div key={id} className={id} id={`Section-${id}`}>
            
            <img
              src={p.src}
              alt={p.name}
              className={`${id}-image`}
              data-aos="fade-up"
              data-aos-duration="1500"
            />

            <div
              className="description-wrapper text-big-width"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="name-white">{p.name}</p>
              <p className="description-white">
                {p.description || "Great performance and design."}
              </p>
              <p className="price-white">From ${p.price}</p>

              <div className="buy-learnmore">
                <button
                  className={`btn-buy-white btn-buy-${id}`}
                  onClick={() => handleAdd(p)}
                >
                  Buy
                </button>

                <button className="more-info" onClick={() => handleLearnMore(p)}>
                  Learn more &gt;
                </button>
              </div>
            </div>

          </div>
        );
      })}
      <InfoModal open={modalOpen} onClose={() => setModalOpen(false)} title={modalInfo.title} description={modalInfo.description} />
      <AddToCartToast toasts={toasts} removeToast={(id) => setToasts(prev => prev.filter(t => t.id !== id))} />
    </>
  );
}

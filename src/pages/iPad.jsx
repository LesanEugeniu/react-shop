import React, { useState } from "react";
import products, { iPadCases } from "../data/products";
import InfoModal from "../components/InfoModal";
import AddToCartToast from "../components/AddToCartToast";
import "../assets/styles/style2.css";
import "../assets/styles/ipad.css";
import { addItem } from "../lib/cart";

export default function IpadPage() {
  const [toasts, setToasts] = React.useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", description: "" });

  const ipadList = ["ipad-pro", "ipad", "ipad-mini"];

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
      <div className="ipad-wrapper-1">
        <div className="ipads">
          {Object.values(iPadCases).map((item) => (
            <a key={item.id} className="nameiPad" href={`#Section-${item.id}`}>
              <div className="supraface">
                <img className="size-ipads" src={item.src} alt={item.name} />
                <p className="nameiPad">{item.name}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="iPadAir ipad-air-description-wrapper">
          <p className="name-white">iPad Air</p>
          <p className="description-white">Light. Bright. Full of might.</p>
          <p className="price-white">From $539</p>

          <div className="buy-learnmore">
            <button className="btn-buy-white btn-buy-iPadAir" onClick={() => handleAdd(products["ipad-air"])}>
              Buy
            </button>
            <button className="more-info btn-learn-iPadAir" onClick={() => handleLearnMore(products["ipad-air"])}>
              Learn more &gt;
            </button>
          </div>
        </div>

        <img
          className="iPadAir-Image"
          src={products["ipad-air"].src}
          alt="iPad Air"
        />
      </div>

      {ipadList.map((id) => {
        const p = products[id];
        return (
          <div key={id} id={`Section-${id}`} className={`${id}`} >
            <div className="description-wrapper" data-aos="fade-up">
              <p>{p.name}</p>
              <p>{p.description || "Premium performance and design."}</p>
              <p>From ${p.price}</p>

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
              className="iPad-Image"
              src={p.src}
              alt={p.name}
              data-aos="fade-up"
            />
          </div>
        );
      })}

      <InfoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalInfo.title}
        description={modalInfo.description}
      />
      <AddToCartToast toasts={toasts} removeToast={(id) => setToasts(prev => prev.filter(t => t.id !== id))} />
    </>
  );
}

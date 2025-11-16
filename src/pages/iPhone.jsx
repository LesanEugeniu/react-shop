import React, { useEffect } from 'react';
import products from '../data/products';
import { iPhoneCases } from '../data/products';
import AddToCartToast from "../components/AddToCartToast";
import InfoModal from "../components/InfoModal";
import '../assets/styles/iphone.css';
import iPhoneShowcase from '../assets/media/iphone13PROdown.png';
import Img6in1 from '../assets/media/6in-1.png';
import ImgOne from '../assets/media/one.png';
import Img3mob from '../assets/media/3mob.png';
import ImgSwitch from '../assets/media/SwitToiPhone.png';
import ImgPrivacy from '../assets/media/privacy.png';
import { addItem } from "../lib/cart";

export default function IPhone({ setNavFooterColor }) {
  const [toasts, setToasts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({ title: "", description: "" });

  useEffect(() => {
    setNavFooterColor('black');
  }, [setNavFooterColor]);

  const iphoneList = ['iphone13-pro', 'iphone13', 'iphone-se', 'iphone12', 'iphone11'];

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
      <div className="wrapper-1">
        <div className="iPhones">
          {Object.values(iPhoneCases).map(phone => (
            <a
              key={phone.id}
              className="nameiPhone"
              href={`#Section-${phone.id}`}
            >
              <div className="supraface">
                <img className="size-iPhones-v3" src={phone.src} alt={phone.name} />
                <p className="nameiPhone">{phone.name}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="TopBrend">
          <p className="TheMost">The Most</p>
          <p className="Performant TheMost">Performant</p>
          <a href="#Section-iphone13-pro" className="more-more">learn more</a>
        </div>

        <img className="iPhone-down" src={iPhoneShowcase} alt="iPhone13Pro" />
      </div>

      <div className="section-1 container-align">
        <div className="wrapper-2">
          <img className="in6-1" src={Img6in1} alt="6in-1" data-aos="fade-up" data-aos-duration="1500" />
          <img className="one" src={ImgOne} alt="One" data-aos="fade-up" data-aos-duration="1500" />
        </div>
      </div>

      <div className="static-container-2">
        <div className="mini-container-2">
          <div className="txt-paragraf" data-aos="fade-up" data-aos-duration="1500">
            <p className="TheMost Performant">
              Introducing<br />the Apple<br />Research app.
            </p>
            <p className="future">The future of health research is you.</p>
          </div>
          <img className="mob3" src={Img3mob} alt="3mob" data-aos="fade-up" data-aos-duration="1500" />
        </div>
      </div>

      <div className="container-3">
        <div className="flex-betwen">
          <div className="square square-1" data-aos="fade-up" data-aos-duration="1500">
            <div>
              <p className="TheMost Performant text-center">
                Switching to iPhone<br />is super simple.
              </p>
            </div>
            <img className="Switching" src={ImgSwitch} alt="Switch to iPhone" />
          </div>

          <div className="square square-2" data-aos="fade-up" data-aos-duration="1500">
            <div className="in-square">
              <img className="privacy" src={ImgPrivacy} alt="privacy" />
              <p className="TheMost Performant text-center">Privacy</p>
              <p className="future text-center">What you share should be up to you.</p>
            </div>
          </div>
        </div>
      </div>

      {iphoneList.map(id => {
        const p = products[id];
        return (
          <div
            key={id}
            id={`Section-${id}`}
            className={`${id}`}
          >
            <img src={p.src} alt={p.name} data-aos="fade-up" />

            <div className="description-wrapper" data-aos="fade-up">
              <p>{p.name}</p>
              <p>Premium design, quality and performance.</p>
              <p>From ${p.price}</p>

              <div className="buy-learnmore">
                <button className="btn-buy-white" onClick={() => handleAdd(p)}>Buy</button>
                <button className="more-info" onClick={() => handleLearnMore(p)}>Learn more &gt;</button>
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

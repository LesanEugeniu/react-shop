import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import IPhone from './pages/iPhone';
import IPad from './pages/iPad';
import Samsung from './pages/Samsung';
import Xiaomi from './pages/Xiaomi';
import Huawei from './pages/Huawei';
import SamsungTab from './pages/SamsungTab';
import HuaweiTab from './pages/HuaweiTab';
import Support from './pages/Support';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { useState } from "react";

function App() {
  const [color, setNavFooterColor] = useState("black");

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;
    function onScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
      } else if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
      }
      lastScroll = currentScroll;
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <BrowserRouter>
      <Navbar color={color} />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home setNavFooterColor={setNavFooterColor} />} />
          <Route path="/about" element={<About />} />
          <Route path="/iphone" element={<IPhone setNavFooterColor={setNavFooterColor} />} />
          <Route path="/ipad" element={<IPad setNavFooterColor={setNavFooterColor} />} />
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/xiaomi" element={<Xiaomi />} />
          <Route path="/huawei" element={<Huawei />} />
          <Route path="/samsung-tab" element={<SamsungTab />} />
          <Route path="/huawei-tab" element={<HuaweiTab />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer color={color} />
    </BrowserRouter>
  );
}

export default App;
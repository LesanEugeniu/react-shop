import React, { useEffect } from 'react';
import '../assets/styles/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/media/Logo.svg';
import Video1 from '../assets/media/video-1.mp4';
import Video2 from '../assets/media/video-2.mp4';

function Home({ setNavFooterColor }) {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  useEffect(() => {
    const overlay = document.querySelector('.intro-overlay');
    const timer = setTimeout(() => {
      overlay?.classList.add('intro-hidden');
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setNavFooterColor('black');
  }, [setNavFooterColor]);
  
  return (
    <div>
      <div className="intro-overlay">
        <img className="intro-logo" src={Logo} alt="Logo" />
      </div>

      <div className="hero-section">
        <video className="hero-video" muted loop autoPlay>
          <source src={Video1} type="video/mp4" />
        </video>
        <p className="hero-title">Discover our<br />Technology</p>
        <p className="hero-subtitle">
          Breakthroughs in extraordinary<br />technology that meet real user needs.
        </p>
      </div>

      <div className="feature-section">
        <video className="feature-video" muted loop autoPlay>
          <source src={Video2} type="video/mp4" />
        </video>
        <p className="feature-title" data-aos="fade-up">
          Better performance to spend<br />time with pleasure.
        </p>
      </div>

    </div>
  );
}

export default Home;

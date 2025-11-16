import { useEffect, useRef, useState } from 'react';
import '../assets/styles/navbar.css';
import Logo from '../assets/media/Logo.svg';
import CartIcon from '../assets/media/Cart.svg';
import ProfileIcon from '../assets/media/Profile.svg';

function Navbar({ color }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const rootRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.linkuri-nav');
    navLinks.forEach((link, index) => {
      if (!burgerOpen) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  }, [burgerOpen]);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="nav-bar" ref={rootRef} style={{backgroundColor: color}}>
      <div className="ul">
        <a href="/">
              <img className="logo logo-nav" src={Logo} alt="Logo" />
        </a>

        <div className="dropdown" data-dropdown>
          
          <button
            className="linked nav-btn link linkuri-nav trei-links dispar-after"
            data-dropdown-button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('apple');
            }}
            aria-expanded={openDropdown === 'apple'}
          >
            Apple
          </button>
            <div className={`dropdown-menu${openDropdown === 'apple' ? ' open' : ''}`}>
              <div className="flex-div">
                <a className="link flex-div-1 linked black-link-dropdown" href="/iphone">iPhone</a>
                <a className="link flex-div-1 linked black-link-dropdown" href="/ipad">iPad</a>
              </div>
            </div>
            <a className="linked nav-btn link procent linkuri-nav" href="/iphone">iPhone</a>
            <a className="linked nav-btn link procent linkuri-nav" href="/ipad">iPad</a>
        </div>

        <div className="dropdown" data-dropdown>
          <button
            className="linked nav-btn link linkuri-nav trei-links dispar-after"
            data-dropdown-button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('smartphone');
            }}
            aria-expanded={openDropdown === 'smartphone'}
          >
            Smartphone
          </button>
            <div className={`dropdown-menu${openDropdown === 'smartphone' ? ' open' : ''}`}>
              <div className="flex-div">
                <a className="link flex-div-1 linked black-link-dropdown" href="/xiaomi">Xiaomi</a>
                <a className="link flex-div-1 linked black-link-dropdown" href="/samsung">Samsung</a>
                <a className="link flex-div-1 linked black-link-dropdown" href="/huawei">Huawei</a>
              </div>
            </div>
            <a className="linked nav-btn link procent linkuri-nav" href="/xiaomi">Xiaomi Phone</a>
            <a className="linked nav-btn link procent linkuri-nav" href="/samsung">Samsung Phone</a>
            <a className="linked nav-btn link procent linkuri-nav" href="/huawei">Huawei Phone</a>
        </div>

        <div className="dropdown" data-dropdown>
          <button
            className="linked nav-btn link linkuri-nav trei-links dispar-after"
            data-dropdown-button
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('tablet');
            }}
            aria-expanded={openDropdown === 'tablet'}
          >
            Tablet
          </button>
            <div className={`dropdown-menu${openDropdown === 'tablet' ? ' open' : ''}`}>
              <div className="flex-div">
                <a className="link flex-div-1 linked black-link-dropdown" href="/samsung-tab">Samsung</a>
                <a className="link flex-div-1 linked black-link-dropdown" href="/huawei-tab">Huawei</a>
              </div>
            </div>
            <a className="linked nav-btn link procent linkuri-nav" href="/samsung-tab">Samsung Tablet</a>
            <a className="linked nav-btn link procent linkuri-nav" href="/huawei-tab">Huawei Tablet</a>
        </div>

  <a className="linked white-link-navbar linkuri-nav" href="/about">About Astro</a>
      <a className="linked white-link-navbar linkuri-nav" href="/support">Support</a>

        <div className="search-box linkuri-nav">
          <input
            className="search-txt"
            type="text"
            name=""
            placeholder="Type to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <a className="search-btn" href="#" onClick={(e) => e.preventDefault()}>
            <i className="fas fa-search" />
          </a>
        </div>

  <a href="/cart"><img className="Cart linkuri-nav" src={CartIcon} alt="Cart" /></a>
  <a href="/"><img className="size35 linkuri-nav" src={ProfileIcon} alt="Profile" /></a>
      </div>

      <a className="logo-2" href="/">
        <img className="logo" src={Logo} alt="Logo" />
      </a>

      <div className={`burger${burgerOpen ? ' open toggle' : ''}`} onClick={() => setBurgerOpen((v) => !v)}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
  );
}

export default Navbar;

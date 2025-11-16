import React from 'react';
import '../assets/styles/footer.css';

function Footer({ color }) {
	return (
		<div className="footer" style={{backgroundColor: color}}>
			<div>
				<p className="text-3 text-4">ENVOY</p>
				<p className="text-3">We create possibilities<br/>for the connected world.</p>
				<p className="text-3 text-5">Be Bold.</p>
			</div>
			<div>
				<p className="text-3 text-5">Explore</p>
				<p className="text-3"><a className="white-link-footer" href="/Smartphone/Samsung.html">Samsung</a></p>
				<p className="text-3"><a className="white-link-footer" href="/Smartphone/Huawei.html">Huawei</a></p>
				<p className="text-3"><a className="white-link-footer" href="/Smartphone/Xiaomi.html">Xiaomi</a></p>
				<p className="text-3"><a className="white-link-footer" href="/About">About Astro</a></p>
				<p className="text-3"><a className="white-link-footer" href="/Support">Support</a></p>
			</div>
			<div>
				<p className="text-3 text-5">Visit</p>
				<p className="text-3">Envoy So.California</p>
				<p className="text-3">34 Tesla, Ste 100</p>
				<p className="text-3">Irvine, Ca, USA 92618 </p>
			</div>
			<div>
				<p className="text-3 text-5" >Follow</p>
				<p className="text-3"><a className="white-link-footer" href="https://www.instagram.com/eugeniu_lesan/" target="_blank" rel="noreferrer">Instagram</a></p>
				<p className="text-3"><a className="white-link-footer" href="https://twitter.com/Vatarioff" target="_blank" rel="noreferrer">Twitter</a></p>
				<p className="text-3"><a className="white-link-footer" href="https://www.linkedin.com/in/eugeniu-le%C8%9Ban-50863a230/" target="_blank" rel="noreferrer">Linkedln</a></p>
			</div>
			<div className="legal">
				<p className="text-3 text-5" >Legal</p>
				<p className="text-3">Terms</p>
				<p className="text-3">Privacy</p>
			</div>
			<div className="new-buisines">
				<p className="text-3 text-5" >New Buisiness</p>
				<p className="text-3">eugeniu1337@gmail.com</p>
				<p className="text-3">949.333.3106</p>
			</div>
			<p className="text-pos text-3 text-5">© 2022 Envoy. All Rights Reserved</p>
		</div>
	);
}

export default Footer;

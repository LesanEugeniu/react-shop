import React from "react";
import "../assets/styles/support.css";
import { countries } from "../data/products";
import AstroSuportPng from '../assets/media/astro-support.png';
import MapComponent from "../components/MapComponent";

export default function Support() {

  return (
    <div className="astro-page">

      <div className="support-wrapper-1">
        <img className="img-sup" src={AstroSuportPng} alt="Astro Support" />
        <p className="text-cont-1">Astro Support</p>
      </div>

      <div className="container-2">
        <div className="mini-container-1">
          
          <div className="wrap-2">
            <MapComponent />
          </div>

          <div className="wrap-1">
            <form>
              
              <div className="in-form">
                <label className="form-text" htmlFor="fname">Full Name</label>
                <input className="formular-cauza" type="text" id="fname" placeholder="ex: Giovani Cretu" />
              </div>

              <div className="in-form">
                <label className="form-text" htmlFor="email">Email</label>
                <input className="formular-cauza" type="text" id="email" placeholder="ex: cretugiovani@gmail.com" />
              </div>

              <div className="in-form">
                <label className="form-text" htmlFor="country">Country</label>
                <select className="formular-cauza" id="country" size="5">
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div className="in-form">
                <label className="form-text" htmlFor="problem">About Problem</label>
                <textarea
                  className="formular-cauza"
                  id="problem"
                  rows="10"
                  placeholder="Your Problem"
                ></textarea>
              </div>

              <div className="in-form">
                <input type="submit" value="Submit" />
              </div>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}

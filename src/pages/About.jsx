import React from "react";
import "../assets/styles/aboutastro.css";
import Video3 from '../assets/media/video-3.mp4';
import Slide1 from '../assets/media/slide-1.jpg';
import Slide2 from '../assets/media/slide-2.jpg';
import Slide3 from '../assets/media/slide-3.jpg';

export default function About() {
  return (
    <>
      <div className="about-wrapper-1">
        <p className="text-sect-1">
          Technology as<br />an art form.
        </p>
      </div>

      <video className="video-1" muted loop autoPlay>
        <source src={Video3} />
      </video>

      <div className="about-wrapper-2">
        <p className="text-sect-2" data-aos="fade-up" data-aos-duration="1500">
          The largest innovative<br />store in the world.
        </p>
      </div>

      <div className="about-wrapper-3">
        <div className="slider-frame">
          <div className="slide-images">
            <div className="img-container">
              <img className="slide" src={Slide1} alt="slide-1" />
            </div>
            <div className="img-container">
              <img className="slide" src={Slide2} alt="slide-2" />
            </div>
            <div className="img-container">
              <img className="slide" src={Slide3} alt="slide-3" />
            </div>
          </div>
        </div>

        <div className="text-3 space-cont" data-aos="fade-up" data-aos-duration="1500">

          <div className="margin-text child-1">
            <p className="text-sect-3 text-sect-3-bold margin-text-1">Vision</p>
            <p className="text-sect-3 margin-text-1">
              We strive to be a sustainable company that contributes to a better world.
            </p>
            <span className="margin-text-1"></span>
          </div>

          <div className="margin-text child-2">
            <p className="text-sect-3 text-sect-3-bold margin-text-1">Mission</p>
            <p className="text-sect-3 margin-text-1">
              We exist to elevate life through technological artistry.
            </p>
            <span className="margin-text-1"></span>
          </div>

          <div className="margin-text child-3">
            <p className="text-sect-3 text-sect-3-bold margin-text-1">Values</p>
            <p className="text-sect-3 margin-text-1">
              Benfen | User-led | Aim for perfection | Goal-oriented.
            </p>
            <span className="margin-text-1"></span>
          </div>

        </div>
      </div>
    </>
  );
}

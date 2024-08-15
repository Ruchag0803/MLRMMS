import React from 'react';
import './AboutUs.css';
import aboutUsImage from '../assets/images/AboutUs.jpg';

function AboutUs() {
  return (
    <div className="about-us-container" id="about">
      <h2>About Us</h2>
      <div className="about-us-content">
        <img src={aboutUsImage} alt="Our Story" className="about-us-image" />
        <p>
          Our restaurant was founded on the principles of bringing the best flavors from around the world to your table.
          We are passionate about quality, freshness, and making our guests feel at home.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

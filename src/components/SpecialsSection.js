import React from 'react';
import './SpecialsSection.css';
import special1 from '../assets/images/special1.jpg';
import special2 from '../assets/images/special2.jpg';

function SpecialsSection() {
  return (
    <div className="specials-container" id="specials">
      <h2>Today's Specials</h2>
      <div className="specials-items">
        <div className="special-item">
          <img src={special1} alt="Special Dish 1" />
          <h3>Special Dish 1</h3>
        </div>
        <div className="special-item">
          <img src={special2} alt="Special Dish 2" />
          <h3>Special Dish 2</h3>
        </div>
      </div>
    </div>
  );
}

export default SpecialsSection;

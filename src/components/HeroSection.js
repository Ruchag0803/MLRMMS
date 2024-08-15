import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the best cuisine from around the world</p>
        <div className="buttons">
          <button className="cta-button order">Order on the Table</button>
          <button className="cta-button reserve">Reserve Table</button>
        </div>
      </div>
      <div className="login-signup">
        <button className="login-button" onClick={handleModal}>Login/Signup</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModal}>&times;</span>
            <h2>Login or Signup</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="modal-submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;

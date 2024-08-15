import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-menu">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Restaurant St, Food City, FC 12345</p>
          <p>Email: info@myrestaurant.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyRestaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

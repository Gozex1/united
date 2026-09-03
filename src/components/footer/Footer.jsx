import { FaGooglePlay, FaApple, FaArrowRight } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-circle">O</span>
              <span>CLICON</span>
            </div>
            <p className="support-title">Customer Supports:</p>
            <p className="phone">(629) 555-0129</p>
            <p className="address">
              4517 Washington Ave.
              <br />
              Manchester, Kentucky 39495
            </p>
            <p className="email">info@kinbo.com</p>
          </div>
          <div className="footer-column">
            <h3>TOP CATEGORY</h3>

            <a href="#">Computer & Laptop</a>
            <a href="#">SmartPhone</a>
            <a href="#">Headphone</a>

            <a href="#" className="active-link">
              <span></span>
              Accessories
            </a>

            <a href="#">Camera & Photo</a>
            <a href="#">TV & Homes</a>

            <a href="#" className="browse">
              Browse All Product
              <FaArrowRight />
            </a>
          </div>
          <div className="footer-column">
            <h3>QUICK LINKS</h3>

            <a href="#">Shop Product</a>
            <a href="#">Shopping Cart</a>
            <a href="#">Wishlist</a>
            <a href="#">Compare</a>
            <a href="#">Track Order</a>
            <a href="#">Customer Help</a>
            <a href="#">About Us</a>
          </div>
          <div className="footer-column app-column">
            <h3>DOWNLOAD APP</h3>

            <button className="app-button">
              <FaGooglePlay />

              <div>
                <small>Get it now</small>
                <strong>Google Play</strong>
              </div>
            </button>

            <button className="app-button">
              <FaApple />

              <div>
                <small>Get it now</small>
                <strong>App Store</strong>
              </div>
            </button>
          </div>
          <div className="footer-column tags-column">
            <h3>POPULAR TAG</h3>

            <div className="tags">
              <span>Game</span>
              <span>iPhone</span>
              <span>TV</span>
              <span>Asus Laptops</span>

              <span>Macbook</span>
              <span>SSD</span>
              <span>Graphics Card</span>

              <span>Power Bank</span>
              <span>Smart TV</span>
              <span>Speaker</span>

              <span>Tablet</span>
              <span>Microwave</span>
              <span>Samsung</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Kinbo eCommerce Template © 2021. Design by Templatecookie</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

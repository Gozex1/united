import {
  FaBox,
  FaTrophy,
  FaCreditCard,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import pc from "../../assets/Image (14).svg";
import phone from "../../assets/Image 5.svg";
import erepods from "../../assets/Image 4.svg";

import "./Banner.css";

function Banner() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-main">
          <div className="hero-content">
            <div className="small-title">
              <span className="li"></span>
              THE BEST PLACE TO PLAY
            </div>
            <h1 className="xbox">Xbox Consoles</h1>
            <p className="save">
              Save up to 50% on select Xbox games. Get
              <br />3 months of PC Game Pass for ₹2 USD.
            </p>
            <button className="shop-btn1">
              SHOP NOW
              <FaArrowRight />
            </button>
            <div className="dots">
              <GoDotFill />
              <GoDot className="dod" />
              <GoDot className="dod" />
            </div>
          </div>
          <img className="main-product" src={pc} alt="Xbox" />
        </div>
        <div className="hero-right">
          <div className="right-top">
            <div className="sale-text">
              <span>SUMMER SALES</span>
              <h2>
                New Google
                <br />
                Pixel 6 Pro
              </h2>
              <button className="shop-btn">
                SHOP NOW
                <FaArrowRight />
              </button>
            </div>

            <img className="google" src={phone} alt="Google Pixel" />
          </div>
          <div className="right-bottom">
            <img src={erepods} alt="Xiaomi FlipBuds" />
            <div className="earbuds-content">
              <h2>Xiaomi</h2>
              <h2>FlipBuds Pro</h2>
              <p>₹299 USD</p>
              <button className="shop-btn small white">
                SHOP NOW
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <FaBox className="feature-icon" />
          <div>
            <h3>FASTED DELIVERY</h3>
            <p>Delivery in 24H</p>
          </div>
        </div>

        <div className="feature">
          <FaTrophy className="feature-icon" />

          <div>
            <h3>24 HOURS RETURN</h3>
            <p>100% money-back guarantee</p>
          </div>
        </div>

        <div className="feature">
          <FaCreditCard className="feature-icon" />
          <div>
            <h3>SECURE PAYMENT</h3>
            <p>Your money is safe</p>
          </div>
        </div>
        <div className="feature">
          <FaHeadset className="feature-icon" />
          <div>
            <h3>SUPPORT 24/7</h3>
            <p>Live contact/message</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;

import { FaArrowRightLong } from "react-icons/fa6";
import "./Navbar.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/Logo (2).svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <section className="container0">
      <div className="navbar-top">
        <div className="friday">
          <button>Black</button>
          <h3>Friday</h3>
        </div>
        <div className="discount1">
          <small>up to</small>
          <h1>59%</h1>
          <h3>OFF</h3>
        </div>
        <div>
          <button className="shop-btn">
            <span>Shop now </span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="navbar-middle">
        <div className="welcome-part">
          <p>Welcome to Clicon online eCommerce store.</p>
        </div>
        <div className="all">
          <h3 className="follow">Follow us:</h3>
          <div className="icons">
            <FaTwitter />
            <FaFacebook />
            <FaPinterestP />
            <FaDiscord />
            <FaInstagram />
          </div>
          <div className="line"></div>
          <select className="language">
            <option value="en">USD</option>
            <option value="uz">USZ</option>
            <option value="ru">RU</option>
          </select>
          <select className="language">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="sum">SUM</option>
          </select>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-wrapper">
          <div>
            <Link to="home">
              <img className="logo1" src={logo} alt="" />
            </Link>
          </div>
          <div className="input-wrapper">
            <input
              className="input"
              type="text"
              placeholder="Search for anything..."
            />
            <IoSearchSharp className="search" />
          </div>
          <div className="navbar-icons">
            <div>
              <Link to="cart">
                <FaShoppingCart />
              </Link>
            </div>
            <div>
              <Link to="like">
                <FaHeart />
              </Link>
            </div>
            <FaUser />
          </div>
        </div>
      </div>

      <div className="top-info">
        <div className="top-container">
          <Link to="allcatagory">
            <div className="category">
              All Category
              <FaChevronDown />
            </div>
          </Link>

          <div className="item">
            <FaMapMarkerAlt />
            <span>Track Order</span>
          </div>

          <div className="item">
            <FaExchangeAlt />
            <span>Compare</span>
          </div>

          <div className="item">
            <FaHeadphones />
            <span>Customer Support</span>
          </div>

          <div className="item">
            <FaInfoCircle />
            <span>Need Help</span>
          </div>

          <div className="phone">
            <FaPhoneAlt />
            <span>+1-202-555-0104</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Navbar;

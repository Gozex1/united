import "./ProductDEtail.css";
import { useParams, Link } from "react-router-dom";
import { products, products1 } from "../../components/mock";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addToLike } from "../../redux/likeSlice";
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function ProductDEtail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const allProducts = [...products, ...products1];

  const product = allProducts.find((item, index) => String(index + 1) === id);

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-top">
          <div className="product-image-side">
            <div className="main-image">
              <img src={product.image} alt="Macbook" />
            </div>
          </div>

          <div className="product-info">
            <div className="rating">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <span>4.7 Star Rating (21,671 User feedback)</span>
            </div>

            <h1>{product.title}</h1>

            <div className="product-meta">
              <div>
                <p>
                  SKU: <span>A264671</span>
                </p>

                <p>
                  Brand: <b>Apple</b>
                </p>
              </div>

              <div>
                <p>
                  Availability: <span className="stock">In Stock</span>
                </p>

                <p>
                  Category: <b>Electronics Devices</b>
                </p>
              </div>
            </div>
            <div className="price-box">
              <span className="current-price">Rs 125000</span>

              <span className="old-price">Rs 156000</span>

              <span className="discount">21% OFF</span>
            </div>

            <p className="installment">or</p>

            <h3 className="get-price">
              Get it for <span>Rs 90,000</span>
            </h3>

            <hr />
            <div className="options">
              <div className="option-item">
                <label>Color</label>

                <div className="colors">
                  <span className="color white"></span>
                  <span className="color blue"></span>
                </div>
              </div>

              <div className="option-item">
                <label>Size</label>

                <select>
                  <option>14-inch Liquid Retina XDR display</option>
                  <option>13-inch Display</option>
                  <option>16-inch Display</option>
                </select>
              </div>

              <div className="option-item">
                <label>Memory</label>

                <select>
                  <option>16GB unified memory</option>
                  <option>8GB unified memory</option>
                </select>
              </div>

              <div className="option-item">
                <label>Storage</label>

                <select>
                  <option>1TB SSD Storage</option>
                  <option>512GB SSD Storage</option>
                  <option>256GB SSD Storage</option>
                </select>
              </div>
            </div>
            <div className="product-actions">
              <div className="quantity">
                <button>
                  <FaMinus />
                </button>
                <span>01</span>
                <button>
                  <FaPlus />
                </button>
              </div>
              x
              <button className="buy-btn">
                <FaTag />
                GET DEAL (390K)
              </button>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="add-btn"
              >
                <FaShoppingCart />
                ADD
              </button>
            </div>
            <div className="extra-actions">
              <div>
                <button
                  className="fayz"
                  onClick={() => dispatch(addToLike(product))}
                >
                  <FaHeart />
                  <span>Add to Wishlist</span>
                </button>
              </div>

              <div>
                <FaBalanceScale />
                <span>Add to Compare</span>
              </div>

              <div>
                <FaShareAlt />
                <span>Share product</span>
              </div>
            </div>
            <div className="safe-checkout">
              <p>100% Guarantee Safe Checkout</p>

              <div className="payment-methods">
                <span>VISA</span>
                <span>MasterCard</span>
                <span>PayPal</span>
                <span>AMEX</span>
              </div>
            </div>
          </div>
        </div>
        <div className="description-section">
          <div className="tabs">
            <button className="active">DESCRIPTION</button>
            <button>ADDITIONAL INFORMATION</button>
            <button>SPECIFICATION</button>
            <button>REVIEW</button>
          </div>

          <div className="description-content">
            <div className="description-text">
              <h3>Description</h3>

              <p>
                THE MOST POWERFUL MACBOOK PRO EVER IS HERE. WITH THE
                BLAZING-FAST M1 PRO OR M1 MAX CHIP — THE FIRST APPLE SILICON
                DESIGNED FOR PROS.
              </p>

              <p>
                YOU GET GROUNDBREAKING PERFORMANCE AND AMAZING BATTERY LIFE. ADD
                TO THAT A STUNNING LIQUID RETINA XDR DISPLAY.
              </p>

              <p>
                EVEN THE MOST AMBITIOUS PROJECTS ARE EASILY HANDLED WITH UP TO
                10 CPU CORES, UP TO 16 GPU CORES AND MORE.
              </p>
            </div>

            <div className="features1">
              <h3>Feature</h3>

              <p>
                <FaCheckCircle />
                Free 1 Year Warranty
              </p>

              <p>
                <FaTruck />
                Free Shipping & Fasted Delivery
              </p>

              <p>
                <FaShieldAlt />
                100% Money-back guarantee
              </p>

              <p>
                <FaHeadphones />
                24/7 Customer support
              </p>

              <p>
                <FaCheckCircle />
                Secure payment method
              </p>
            </div>

            <div className="shipping">
              <h3>Shipping Information</h3>

              <p>
                <b>Courier:</b> 2-4 days, free shipping
              </p>

              <p>
                <b>Local Shipping:</b> up to one week, Rs19.00
              </p>

              <p>
                <b>UPS Ground Shipping:</b> 4-6 days, Rs29.00
              </p>

              <p>
                <b>Unishop Global Export:</b> 3-4 days, Rs39.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDEtail;

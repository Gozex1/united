import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { products2 } from "../components/mock";
import { useDispatch } from "react-redux";
import img36 from "../assets/Image (36).svg";
import "./Computer.css";
import { Link } from "react-router-dom";
function Computer() {
  const dispatch = useDispatch();
  return (
    <section className="container rwrw">
      <div>
        <div className="featured-header">
          <h2>Computer Accessories</h2>
          <nav>
            <ul className="nav">
              <li>
                <a href="">All Products</a>
              </li>
              <li>
                <a href="">Keyboard & Mouse</a>
              </li>
              <li>
                <a href="">Headphone</a>
              </li>
              <li>
                <a href="">Webcam</a>
              </li>
              <li>
                <a href="">Printer</a>
              </li>

              <li>
                <a className="browse" href="">
                  Browse All Products
                  <FaArrowRight />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="products-container1">
          {products2.map((item) => (
            <Link className="link" to={`/product/${item.id}`}>
              <div className="product-card" key={item.id}>
                {item.discount && <span>{item.discount}</span>}
                {item.hot && <span className="hot">HOT</span>}
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                {item.oldPrice && <del>${item.oldPrice}</del>}

                <p>${item.price}</p>

                <div className="product-buttons">
                  <button onClick={() => dispatch(addToLike(item))}>
                    <CiHeart />
                  </button>
                  <button onClick={() => dispatch(addToCart(item))}>
                    <FiShoppingCart /> ADD TO CART
                  </button>
                  <button>
                    <FaRegEye />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="ads container">
        <div className="fayzullo">
          <div className="ad-card yellow-ad">
            <img src={img36} alt="Earbuds" />

            <h2>
              Xiaomi True <br /> Wireless Earbuds
            </h2>

            <p>
              Escape the noise, It’s time to hear
              <br /> the magic with Xiaomi Earbuds.
            </p>

            <div className="only-price">
              <span>Only for:</span>
              <strong>₹299 USD</strong>
            </div>

            <button>
              SHOP NOW <FaArrowRight />
            </button>
          </div>

          <div className="ad-card blue-ad">
            <span className="summer">SUMMER SALES</span>

            <h2>37% DISCOUNT</h2>

            <p>
              only for <b>SmartPhone</b> product.
            </p>

            <button>
              SHOP NOW <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Computer;

import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import "./Deals.css";
import { products } from "../mock";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addToLike } from "../../redux/likeSlice";
import { Link } from "react-router-dom";
function Deals() {
  const dispatch = useDispatch();
  return (
    <section className="container">
      <div className="deals-wrapper">
        <div className="best">
          <h2>Best Deals</h2>
          <p>Deals ends in</p>
          <p className="time">15d : 21h : 57m : 23s</p>
        </div>
        <div>
          <ul>
            <li>
              <a className="product-list" href="">
                Browse All Product <FaArrowRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="products">
          <div></div>
          <div className="products-container">
            {products.map((item) => (
              <Link className="link" to={`/product/${item.id}`} key={item.id}>
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
                      <FiShoppingCart />
                      ADD TO CART
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
      </div>
    </section>
  );
}
export default Deals;

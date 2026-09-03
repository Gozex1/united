import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import "./Featured.css";
import { products1 } from "../components/mock";
import { useDispatch } from "react-redux";
import { addToLike } from "../redux/likeSlice";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
function Featured() {
  const dispatch = useDispatch();
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Products</h2>

        <nav>
          <ul className="nav">
            <li>
              <a href="">All Products</a>
            </li>
            <li>
              <a href="">Smart Phone</a>
            </li>
            <li>
              <a href="">Laptop</a>
            </li>
            <li>
              <a href="">Headphone</a>
            </li>
            <li>
              <a href="">TV</a>
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
        {products1.map((item) => (
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
    </section>
  );
}

export default Featured;

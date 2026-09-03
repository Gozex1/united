import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { products } from "../../components/mock";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { addToLike } from "../../redux/likeSlice";
import { products2 } from "../../components/mock";
import "./Allcatagory.css";
function Allcatagory() {
  const dispatch = useDispatch();
  return (
    <section className="container">
      <div>
        <h2>All Catagory</h2>
      </div>
      <div>
        <div className="products-container1">
          {products.map((item) => (
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
    </section>
  );
}
export default Allcatagory;

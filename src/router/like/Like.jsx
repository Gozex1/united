import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";

function Like() {
  const user1 = useSelector((item) => item.like.value);
  return (
    <section>
      <div>
        <div className="products">
          <div></div>
          <div className="products-container">
            {user1.map((item) => (
              <div className="product-card" key={item.id}>
                {item.discount && <span>{item.discount}</span>}
                {item.hot && <span className="hot">HOT</span>}
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                {item.oldPrice && <del>${item.oldPrice}</del>}
                <p>${item.price}</p>
                <div className="product-buttons">
                  <button>
                    <CiHeart />
                  </button>
                  <button>
                    <FiShoppingCart /> ADD TO CART
                  </button>
                  <button>
                    <FaRegEye />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Like;

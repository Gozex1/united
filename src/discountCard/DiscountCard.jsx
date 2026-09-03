import "./DiscountCard.css";
import { FaArrowRight } from "react-icons/fa";

function DiscountCard() {
  return (
    <section className="container">
      <div className="discount-card">
        <div className="discount-content">
          <p className="category1">COMPUTER & ACCESSORIES</p>
          <h2>32% Discount</h2>
          <p className="description">For all electronics products</p>
          <div className="offer">
            <span>Offers ends in:</span>
            <button>ENDS OF CHRISTMAS</button>
          </div>
          <button className="shop-btn2">
            SHOP NOW
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiscountCard;

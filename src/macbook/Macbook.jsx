import { FaArrowRight } from "react-icons/fa";
import "./Macbook.css";
import mac from "../assets/Image (37).svg";
function Macbook() {
  return (
    <section className="container">
      <div className="macbook">
        <div className="mac-wrapper">
          <p className="svae">SAVE UP TO ₹200.00</p>
          <h2 className="pro">Macbook Pro</h2>
          <p className="apple">
            Apple M1 Max Chip. 32GB Unified <br /> Memory, 1TB SSD Storage
          </p>
          <button className="shop-btn">
            SHOP NOW
            <FaArrowRight />
          </button>
        </div>
        <div>
          <img className="mac" src={mac} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Macbook;

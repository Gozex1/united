import { FaArrowRight } from "react-icons/fa";
import "./Banner1.css";
import shar from "../assets/image 6.svg";
import xiami from "../assets/Image (30).svg";
function Banner1() {
  return (
    <section className="container">
      <div className="wrapper1">
        <div className="wrw">
          <div>
            <h4 className="intro">INTRODUCING</h4>
            <h2>
              New Apple <br />
              Homepod Mini
            </h2>
            <p className="teee">
              Jam-packed with innovation,
              <br /> HomePod mini delivers unexpectedly.
            </p>
            <button className="shop-btn2">
              SHOP NOW
              <FaArrowRight />
            </button>
          </div>
          <div>
            <img className="shr" src={shar} alt="" />
          </div>
        </div>
        <div className="wrw1">
          <div>
            <h4 className="new">INTRODUCING NEW</h4>
            <h2>
              Xiaomi Mi 11 Ultra <br /> 12GB+256GB
            </h2>
            <p>
              *Data provided by internal <br /> laboratories. Industry
              measurment.
            </p>
            <button className="shop-btn2">
              SHOP NOW
              <FaArrowRight />
            </button>
          </div>
          <div>
            <img className="shr" src={xiami} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner1;

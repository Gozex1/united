import { FaArrowRight } from "react-icons/fa6";
import google from "../../assets/Group 22.svg";
import amazon from "../../assets/Frame (2).svg";
import phiph from "../../assets/Vector (5).svg";
import toshiba from "../../assets/Group.svg";
import smasung from "../../assets/Group (1).svg";
import "./Newslatter.css";
function Newslatter() {
  return (
    <section className="container">
      <div className="letter-wrapper">
        <h2 className="newslatter-title">Subscribe to our Newsletter</h2>
        <p>
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et <br /> cursus. Donec non quam urna. Quisque vitae porta
          ipsum.
        </p>
        <div className="inp-letter">
          <input type="text" placeholder="Email Address" />
          <button className="subscribe-btn">
            Subscribe <FaArrowRight />
          </button>
        </div>
        <div className="comp">
          <img src={google} alt="" />
          <img src={amazon} alt="" />
          <img src={phiph} alt="" />
          <img src={toshiba} alt="" />
          <img src={smasung} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Newslatter;

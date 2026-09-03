import { catagory } from "../mock";
import "./Catagory.css";
function Catagory() {
  return (
    <section className="container">
      <div>
        <div>
          <h2>Shop with Categorys</h2>
        </div>
        <div className="catagory">
          {catagory.map((item) => {
            return (
              <div className="catagory-card">
                <div key={item.id}>
                  <img src={item.img} alt="" />
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Catagory;

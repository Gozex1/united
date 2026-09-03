import Banner1 from "../../banner1/Banner1";
import Banner from "../../components/banner/Banner";
import Catagory from "../../components/catagory/Catagory";
import Deals from "../../components/deals/Deals";
import Latest from "../../components/latest/Latest";
import Newslatter from "../../components/newslatter/Newslatter";
import Computer from "../../computer/Computer";
import DiscountCard from "../../discountCard/DiscountCard";
import Featured from "../../featured/Featured";
import Macbook from "../../macbook/Macbook";
function Home() {
  return (
    <div>
      <Banner />
      <Deals />
      <Catagory />
      <div className="products-section">
        <DiscountCard />
        <Featured />
      </div>
      <Banner1 />
      <Computer />
      <Macbook />
      <Latest />
      <Newslatter />
      
    </div>
  );
}
export default Home;

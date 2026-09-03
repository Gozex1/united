import Banner from "./components/banner/Banner";
import Catagory from "./components/catagory/Catagory";
import Deals from "./components/deals/Deals";
import Navbar from "./components/navbar/Navbar";
import DiscountCard from "./discountCard/DiscountCard";
import Featured from "./featured/Featured";
import "./App.css";
import Banner1 from "./banner1/Banner1";
import { Route, Routes } from "react-router-dom";
import Like from "./router/like/Like";
import Cart from "./router/cart/Cart";
import Home from "./router/home/Home";
import Footer from "./components/footer/Footer";
import Allcatagory from "./router/allcatagory/Allcatagory";
import ProductDetail from "./router/productDetail/ProductDetail";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="like" element={<Like />}></Route>
        <Route path="allcatagory" element={<Allcatagory />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

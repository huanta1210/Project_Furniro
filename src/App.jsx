import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import ProductsList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/cart/Cart";
import PayMents from "./pages/cart/PayMents";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/product" element={<ProductsList />} />
        <Route path="/productDetails" element={<ProductDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/payments" element={<PayMents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

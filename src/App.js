import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Specials from "./components/Specials";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  console.log(setCart)
  return (
    <Router>
      <Nav cartCount = {cartCount}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specials" element={<Specials setCart={setCart} setCartCount={setCartCount}/>} />
        <Route path="/menu" element={<Menu setCart={setCart} setCartCount={setCartCount} />} />
        <Route path="/footer" element={<Footer />} />
        <Route
      path="/cart"
      element={
      <Cart
      cart={cart}
      setCart={setCart}
      setCartCount={setCartCount}
      />
       }
      />
      </Routes>
    </Router>
  );
}

export default App;

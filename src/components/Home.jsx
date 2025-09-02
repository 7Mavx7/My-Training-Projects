import React from "react";
import "../index.css"; // ملف CSS منفصل
import About from "./About";
import Specials from "./Specials";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function ImageOverlay() {
  const m = useNavigate();
  return (
    <div className="image-container">
      <img src={require("../images/m1.png")} alt="Example" className="image" />
      
      {/* النص والزر */}
      <div className="overlay">
        <p>
          Taste the delicious burger and broasted 
          <br />
          from our restaurnt where
          <br />
           you will find the most amazing flavors
        </p>
        <button onClick={() => m('/menu')}>Go to the menu</button>  {/* هاد الزر برجعلو بعد ما خلص  */}
      </div>
      <About />
      <Specials />
      <Footer />
    </div>
  );
}

export default ImageOverlay;

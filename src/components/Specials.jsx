import React from "react";

function Specials( { setCart, setCartCount } ) {

  const i = [
    { name: "Arabic shawarma", Price: '$3.5'}
  ];

  const t = [
    { name: "Spicy fried chicken", Price: '$3.5'}
  ];

  const e = [
    { name: "Classic Chicken Burger", Price: '$3.5'}
  ];

  const m = [
    { name: "Breakfast burger and cheese", Price: '$3.5'}
  ];

  return (
    <div className="specials">
      {/* 1 */}
      <div className="card" style={{ width: "18rem" }}>
        {i.map((item, i) => (
          <div className="s" key={i}>
        <img src={require("../images/m2.png")} className="card-img-top" alt="Example" />
        <div className="card-body">
          <h5 className="card-title">{i.name}</h5>
          <p className="card-text">
            Price : {i.Price}.
          </p>
          <button 
          className="btn btn-primary"
          onClick={() => {
                 setCart(prev => [...prev, item]);
                 setCartCount(prev => prev + 1);
              }}
          >Add to cart</button>
        </div>
          </div>
        ))}
      </div> 

      {/* 2 */}

      <div className="card" style={{ width: "18rem" }}>
        {t.map((item, i) => (
        <div className="s" key={i}>
          <img src={require("../images/m3.png")} className="card-img-top" alt="Example" />
        <div className="card-body">
          <h5 className="card-title">{t.name}</h5>
          <p className="card-text">
            Price : {t.Price}.
          </p>
          <button 
          className="btn btn-primary"
          onClick={() => {
                 setCart(prev => [...prev, item]);
                 setCartCount(prev => prev + 1);
              }}
          >Add to cart</button>
        </div>
        </div>
        ))}
      </div>

      {/* 3 */}

      <div className="card" style={{ width: "18rem" }}>
        {e.map((item, i) => (
        <div className="s" key={i}>
          <img src={require("../images/m4.png")} className="card-img-top" alt="Example" />
        <div className="card-body">
          <h5 className="card-title">{e.name}</h5>
          <p className="card-text">
            Price : {e.Price}.
          </p>
          <button 
          className="btn btn-primary"
          onClick={() => {
                 setCart(prev => [...prev, item]);
                 setCartCount(prev => prev + 1);
              }}
          >Add to cart</button>
        </div>
        </div>
        ))}
      </div>

      {/* 4 */}

      <div className="card" style={{ width: "18rem" }}>
        {m.map((item, i) => (
        <div className="s" key={i}>
          <img src={require("../images/m5.png")} className="card-img-top" alt="Example" />
        <div className="card-body">
          <h5 className="card-title">{m.name}</h5>
          <p className="card-text">
            Price : {m.Price}.
          </p>
          <button 
          className="btn btn-primary"
          onClick={() => {
                 setCart(prev => [...prev, item]);
                 setCartCount(prev => prev + 1);
              }}
          >Add to cart</button>
        </div>
        </div>
        ))}
      </div>

    </div>
  );
}

export default Specials;

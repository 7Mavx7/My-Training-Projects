import React from 'react';
import '../index.css';

function Menu({ setCart, setCartCount }) {

  const itmes = [
    { name: "Classic Burger", Price: "$3" },
    { name: "cheese Burger", Price: "$4" },
    { name: "Mushroom Burger", Price: "$5" },
    { name: "Bequeen Burger", Price: "$5" },
    { name: "Barbecue Burger", Price: "$5" }
  ];

  const itmess = [
    { name: "Classi Chicen Burger", Price: "$3" },
    { name: "Spicy Chicen Burger", Price: "$4" },
    { name: "Barbecue Chicen Burger", Price: "$5" },
    { name: "Cream Chicen cheese Burger", Price: "$5" },
    { name: "Crispy Chicen Burger", Price: "$5" }
  ];

  const itmesss = [
    { name: "Classic Broasted", Price: "$3" },
    { name: "Spicy Broasted", Price: "$4" },
    { name: "Secret marinade Broasted", Price: "$5" },
    { name: "Asian flavor cheese Broasted", Price: "$5" }
  ];

  const itmessss = [
    { name: "Cola", Price: "$3" },
    { name: "7 AB", Price: "$4" },
    { name: "Ayran", Price: "$5" },
    { name: "Barbecue", Price: "$5" },
    { name: "Cheese", Price: "$5" },
    { name: "Ketchup", Price: "$5" },
    { name: "Mayonnaise", Price: "$5" }
  ];

  return (
    <div className='menu'>
      
      {/* Beef */}
      <h3 className="menu-title">Beef Burger</h3>
      <div className="cards-container">
        {itmes.map((item, i) => (
          <div className="card" key={i}>
            <img src={require("../images/m1.png")} className="card-img-top" alt="Beef Burger" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Price : {item.Price}.
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

      {/* Chicken */}
      <h3 className="menu-title">Chicken Burger</h3>
      <div className="cards-container">
        {itmess.map((itme, i) => (
          <div className="card" key={i}>
            <img src={require("../images/m1.png")} className="card-img-top" alt="Chicken Burger" />
            <div className="card-body">
              <h5 className="card-title">Chicken {itme.name}</h5>
              <p className="card-text">
                price : {itme.Price}.
              </p>
              <button
              className="btn btn-primary" 
              onClick={() => {
                 setCart(prev => [...prev, itme]);
                 setCartCount(prev => prev + 1);
              }}
              >Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* broasted */}
      <h3 className="menu-title">Broasted</h3>
      <div className="cards-container">
        {itmesss.map((itme, i) => (
          <div className="card" key={i}>
            <img src={require("../images/m1.png")} className="card-img-top" alt="Chicken Burger" />
            <div className="card-body">
              <h5 className="card-title">Chicken {itme.name}</h5>
              <p className="card-text">
                price : {itme.Price}.
              </p>
              <button
              className="btn btn-primary" 
              onClick={() => {
                 setCart(prev => [...prev, itme]);
                 setCartCount(prev => prev + 1);
              }}
              >Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <h3 className="menu-title">Add-ons</h3>
      <div className="cards-container">
        {itmessss.map((itme, i) => (
          <div className="card" key={i}>
            <img src={require("../images/m1.png")} className="card-img-top" alt="Add-on" />
            <div className="card-body">
              <h5 className="card-title">{itme.name}</h5>
              <p className="card-text">
                Price : {itme.Price}.
              </p>
              <button
              className="btn btn-primary" 
              onClick={() => {
                 setCart(prev => [...prev, itme]);
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

export default Menu;

import React from 'react';
import '../index.css';

const Cart = ( {cart, setCart, setCartCount} ) => {

    function handleRemove(indexToRemove) {
  setCart(prev => prev.filter((_, i) => i !== indexToRemove));
  setCartCount(prev => prev - 1);
}


    return ( 
        <div className='cart'>
            <h1>It is a cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className='m'>
                    <hr />
                    {cart.map(( item, i ) => 
                    <li key={i}>
                        {item.name} - {item.Price}
                        <button onClick={() => handleRemove(i)}>🗑️</button>
                    </li>
                    )}
                    <hr />
                </ul>
            )}
        </div>
     );
}
 
export default Cart;
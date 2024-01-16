
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
    </div>
  );
};

export default Cart;

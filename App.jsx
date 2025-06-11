import React, { useState, useCallback } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css'; // Optional: if you want to add styling

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 24.99, image: 'product3.jpg' },
  ];

  const handleAddToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const handleRemoveFromCart = useCallback((productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }, []);

  return (
    <div className="app-container">
      <h1>🛍️ Simple React Store</h1>
      <div className="main-content">
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart cart={cart} onRemove={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default App;

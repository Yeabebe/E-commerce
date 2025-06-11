const ProductList = ({ products, onAddToCart }) => (
  <div className="product-list">
    <h2>🛒 Products</h2>
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} width="100" />
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

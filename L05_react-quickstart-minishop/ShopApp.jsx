import { useState } from "react";

const products = [
  { id: 1, title: "Cabbage", price: 1.5, isFruit: false, popular: false },
  { id: 2, title: "Garlic", price: 2.0, isFruit: false, popular: true },
  { id: 3, title: "Apple", price: 3.25, isFruit: true, popular: true },
  { id: 4, title: "Mango", price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
      }}
    >
      <h3>{product.title}</h3>
      <p> {product.popular && "⭐ Popular"}</p>
      <p style={{ color: product.isFruit ? "magenta" : "darkgreen" }}>
        Price: ${product.price.toFixed(2)}
      </p>
      <br />
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  const [cartStatus, setCartStatus] = useState(0);

  function handleAddToCart() {
    setCartStatus(cartStatus + 1);
  }

  function handleRemoveFromCart() {
    if (cartStatus > 0) {
      setCartStatus(cartStatus - 1);
    }
  }

  return (
    <div className="shop">
      <h1>Mini Fruit & Veg Stand</h1>
      <p style={{ color: "blue" }}>
        {cartStatus === 0
          ? "Cart is empty"
          : `You have ${cartStatus} items in your cart`}
      </p>
      {cartStatus > 0 && (
        <button style={{ marginBottom: 20 }} onClick={handleRemoveFromCart}>
          Remove one
        </button>
      )}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

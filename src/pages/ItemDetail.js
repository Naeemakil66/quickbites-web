import React, { useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { menuItems } from "../data/menuData";
import { CartContext } from "../context/CartContext";

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  const item = menuItems.find((prod) => prod.id === parseInt(id));

  if (!item) {
    return (
      <div className="page-container">
        <h2>Item Not Found</h2>
        <Link to="/menu" className="btn btn-primary">Back to Menu</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(item, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  return (
    <div className="page-container">
      <button onClick={() => navigate(-1)} className="btn-back">
        &larr; Back
      </button>

      <div className="detail-container">
        <img src={item.image} alt={item.name} className="detail-img" />
        <div className="detail-info">
          <span className="badge">{item.category}</span>
          <h1>{item.name}</h1>
          <p className="rating">⭐ {item.rating} / 5.0</p>
          <p className="detail-price">${item.price.toFixed(2)}</p>
          <p className="detail-desc">{item.description}</p>

          <div className="quantity-control">
            <label>Quantity: </label>
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="qty-btn">-</button>
            <span className="qty-val">{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)} className="qty-btn">+</button>
          </div>

          <button onClick={handleAddToCart} className="btn btn-primary btn-large">
            Add to Cart (${(item.price * quantity).toFixed(2)})
          </button>

          {addedMessage && <p className="success-toast">✓ Added to cart!</p>}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
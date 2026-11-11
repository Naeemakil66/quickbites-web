import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", address: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setOrderSubmitted(true);
    clearCart();
  };

  if (orderSubmitted) {
    return (
      <div className="page-container text-center">
        <h1 className="success-title">🎉 Order Confirmed!</h1>
        <p>Thank you, {formData.name}! Your meal is being prepared and will be delivered soon.</p>
        <Link to="/menu" className="btn btn-primary">Order More Food</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Your Order Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/menu" className="btn btn-primary">Browse Menu</Link>
        </div>
      ) : (
        <div className="checkout-layout">
          {/* Item List */}
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)} each</p>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="btn-remove">&times;</button>
              </div>
            ))}
            <div className="cart-summary">
              <h3>Total Amount: ${totalPrice}</h3>
            </div>
          </div>

          {/* Checkout Form */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Delivery Details</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Place Order (${totalPrice})
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Checkout;
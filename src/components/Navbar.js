import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { totalItems, user, logout } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🍔 QuickBites
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              About & Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/checkout" className="nav-link cart-btn">
              Cart <span className="cart-badge">{totalItems}</span>
            </NavLink>
          </li>

          {/* User Auth Section */}
          <li className="nav-item">
            {user ? (
              <div className="user-nav flex-center">
                <span className="user-welcome">👋 Hi, {user.name}</span>
                <button onClick={logout} className="btn-logout">Logout</button>
              </div>
            ) : (
              <NavLink to="/login" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Login / Signup
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
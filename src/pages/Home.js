import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";

function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <header className="hero-banner">
        <div className="hero-content">
          <h1>Delicious Food Delivered To Your Table</h1>
          <p>Fresh ingredients, handcrafted recipes, and fast service.</p>
          <Link to="/menu" className="btn btn-primary">
            Explore Full Menu
          </Link>
        </div>
      </header>

      {/* Featured Section */}
      <section className="section">
        <h2 className="section-title">Customer Favorites</h2>
        <div className="grid-3">
          {featuredItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="card-img" />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p className="card-price">${item.price.toFixed(2)}</p>
                <Link to={`/menu/${item.id}`} className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
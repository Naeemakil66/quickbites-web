import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Burgers", "Pizza", "Drinks", "Desserts"];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      <h1 className="page-title">Our Menu</h1>

      {/* Filter Controls */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search menu items..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} className="card-img" />
            <div className="card-body">
              <span className="badge">{item.category}</span>
              <h3>{item.name}</h3>
              <p className="card-price">${item.price.toFixed(2)}</p>
              <Link to={`/menu/${item.id}`} className="btn btn-primary">
                View & Order
              </Link>
            </div>
          </div>
        ))}
      </div>
      {filteredItems.length === 0 && <p className="no-results">No dishes found matching your search.</p>}
    </div>
  );
}

export default Menu;
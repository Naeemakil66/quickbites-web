# 🍔 QuickBites - Online Restaurant Ordering System

**QuickBites** is a fully responsive, multi-page frontend web application built using **ReactJS**. It allows users to browse menu categories, search for dishes, view detailed item pages, manage an interactive shopping cart in real time, and simulate a complete checkout and authentication workflow—all managed client-side without external backend dependencies.

---

## 📌 Project Features

- **Dynamic Navigation & Routing:** Seamless multi-page routing using `react-router-dom` across 5+ core views (Home, Menu, Item Details, Checkout/Cart, About & Contact, Login/Signup).
- **Interactive Menu & Real-Time Search:** Search dishes by keyword and filter by categories (Burgers, Pizza, Drinks, Desserts).
- **Dynamic Item Detail Page (`/menu/:id`):** View individual item details, customer ratings, price updates, and quantity controls.
- **Global Shopping Cart (`useContext`):** Add/remove items and adjust quantities with automated real-time total price and badge count calculations.
- **Client-Side Authentication:** Frontend login and signup modal/form system with persistent user state via `localStorage`.
- **Responsive Web Design:** Mobile-first, adaptive layouts styled purely using a single centralized CSS file (`App.css`).

---

## 🛠️ Tech Stack & React Hooks Used

- **Framework:** ReactJS (Functional Components, ES6 JavaScript)
- **Routing:** `react-router-dom` (v6+)
- **State Management & Hooks:**
  - `useState`: Handles local form inputs, active category filters, search terms, and quantity counters.
  - `useEffect`: Manages local data persistence for cart items and authenticated user sessions.
  - `useContext`: Global `CartContext` to share cart state and auth session across all components without prop-drilling.
- **Styling:** Custom CSS (`App.css`) with CSS Flexbox & Grid.

---

## 📁 Project Structure

```text
client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── context/
│   │   └── CartContext.js
│   ├── data/
│   │   └── menuData.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── ItemDetail.js
│   │   ├── Checkout.js
│   │   ├── AboutContact.js
│   │   └── Login.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
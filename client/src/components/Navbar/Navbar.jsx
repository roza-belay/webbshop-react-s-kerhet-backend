import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const { user } = useAuth();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" aria-label="TopStyle home">
        <span className="nav-logo-mark"><FaShoppingBag /></span>
        <span>
          <strong>TopStyle</strong>
          <small>React Webshop</small>
        </span>
      </Link>

      <ul className="nav-menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/checkout">Checkout</NavLink></li>
        <li><NavLink to="/about">Case</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li>
          {user ? <NavLink to="/profile">Profile</NavLink> : <NavLink to="/login">Login</NavLink>}
        </li>
      </ul>

      <Link to="/cart" className="nav-cart" aria-label="Open cart">
        <FaShoppingCart />
        {totalItems > 0 && <span className="nav-cart-count">{totalItems}</span>}
      </Link>
    </nav>
  );
};

export default Navbar;

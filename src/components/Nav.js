import React from "react";
import "../style/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">ELECT</div>
      <div className="nav-links">
        <Link to="/home">
          <div className="home">Home</div>
        </Link>
        <Link to="/shop">
          <div className="shop">Shop</div>
        </Link>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
};

export default Nav;

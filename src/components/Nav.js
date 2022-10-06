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
        <div className="cart">
          <svg style={{ width: "30px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,13A5,5 0 0,1 7,8H9A3,3 0 0,0 12,11A3,3 0 0,0 15,8H17A5,5 0 0,1 12,13M12,3A3,3 0 0,1 15,6H9A3,3 0 0,1 12,3M19,6H17A5,5 0 0,0 12,1A5,5 0 0,0 7,6H5C3.89,6 3,6.89 3,8V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V8C21,6.89 20.1,6 19,6Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;

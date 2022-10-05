import React from "react";
import "../style/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div id="home">
      <div className="home-info">
        <div className="qoute-container">
          <div className="qoute">ELECT</div>
          <div className="qoute">the best electronics</div>
        </div>
        <Link to="/shop">
          <div className="button">SHOP NOW</div>
        </Link>
      </div>
      <img
        src={require("../style/images/controller.png")}
        alt="gaming monitor"
      />
    </div>
  );
};

export default Homepage;

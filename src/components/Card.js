import React from "react";
import "../style/Card.css";

const Card = (props) => {
  return (
    <div key={props.id} className="card">
      <div className="item-img">
        <img src={props.info.image} alt={props.info.title} />
      </div>
      <div className="item-title">{props.info.title}</div>
      <div className="item-price">${props.info.price}</div>
      <div className="add-cart-container">
        <div className="add-cart">Add to cart</div>
        <div className="quantity">
          <div className="number">0</div>
          <div className="change">
            <div className="add">+</div>
            <div className="minus">-</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

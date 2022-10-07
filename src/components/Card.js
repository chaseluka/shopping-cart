import React, { useState } from "react";
import "../style/Card.css";

const Card = (props) => {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const addToCart = () => {
    props.cart(number);
  };

  return (
    <div key={props.id} className="card">
      <div className="item-img">
        <img src={props.info.image} alt={props.info.title} />
      </div>
      <div className="item-title">{props.info.title}</div>
      <div className="item-price">${props.info.price}</div>
      <div className="add-cart-container">
        <div className="add-cart" onClick={addToCart}>
          Add to cart
        </div>
        <div className="quantity">
          <input
            onChange={handleChange}
            type="number"
            id="number"
            value={number}
            max="99"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

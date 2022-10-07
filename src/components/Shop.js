import React, { useEffect, useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";
import "../style/Shop.css";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    if (cart > 0) {
      const quantity = document.getElementById("cart-amount");
      quantity.textContent = cart;
      quantity.style.display = "block";
    }
  }, [cart]);

  const addToCart = (itemsAdded) => {
    setCart(cart + parseInt(itemsAdded));
  };

  useEffect(() => {
    const getItems = async () => {
      const raw = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const data = await raw.json();
      setItems(data);
    };
    getItems();
  }, []);

  return (
    <div id="shop">
      {items.map((item) => {
        return <Card info={item} id={uniqid()} cart={addToCart} />;
      })}
    </div>
  );
};

export default Shop;

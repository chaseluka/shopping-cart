import React, { useEffect, useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";
import "../style/Shop.css";

const Shop = () => {
  const [items, setItems] = useState([]);
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
        return <Card info={item} id={uniqid()} />;
      })}
    </div>
  );
};

export default Shop;

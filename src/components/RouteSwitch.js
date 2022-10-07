import Homepage from "./Homepage";
import Nav from "./Nav";
import Shop from "./Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

const RouteSwitch = () => {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;

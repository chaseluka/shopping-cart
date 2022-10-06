import Homepage from "./Homepage";
import App from "./App";
import Nav from "./Nav";
import Shop from "./Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

const RouteSwitch = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;

import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import { Home } from "../scenes/home/Home";
import { Shop } from "../scenes/shop/Shop";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/cursos" element={<Shop />} exact />

    </Routes>
  );
};

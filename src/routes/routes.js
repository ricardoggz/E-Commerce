import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../scenes/home/Home";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
};

import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import { Home } from "../scenes/home/Home";
import { Login } from "../scenes/login/Login";
import { Shop } from "../scenes/shop/Shop";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<Shop />} />
      <Route path="/iniciar-sesion" element={<Login />} />
    </Routes>
  );
};

import React from "react";
//styles
import "./gridLayout.css";

export const GridLayout = ({ children }) => {
  return <div className="grid-layout flex-container">{children};</div>;
};

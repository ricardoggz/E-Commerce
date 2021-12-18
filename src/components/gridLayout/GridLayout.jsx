import React from "react";
//styles
import "./gridLayout.css";

export const GridLayout = (props) => {
  return (
    <div className="grid-layout flex-container">
      {props.children};
    </div>
  )
};

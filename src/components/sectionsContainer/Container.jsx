import React from "react";

//styles
import "./container.css";

export const SectionContainer = ({ children, title }) => {
  return (
    <section className="container">
      <div className="titles flex-container">
        <span>{title}</span>
      </div>
      {children}
    </section>
  );
};

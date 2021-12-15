import React from "react";

/*styles*/
import "./hero.css";
//components
import { Button } from "../button/Button";

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-title">
        <div className="flex-container">
          <h1>
            Aprende desarrollo web, marketing online, diseño digital y más...
          </h1>
          <div className="button-title">
            <Button title="Comenzar a aprender" />
          </div>
        </div>
      </div>
    </section>
  );
};

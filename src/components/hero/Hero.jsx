import React from "react";

/*styles*/
import "./hero.css";
//components
import { Button } from "../button/Button";
import { SectionContainer } from "../sectionsContainer/Container";
//img


export const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero-container-bg">
      <SectionContainer title="Bienvenido a academia RG.DEV">
        <div className="flex-container hero-description">
          <p>
            Aprende las tecnologías más demandadas para el mundo del desarrollo
            web, conviértete en un desarrollador fullstack, te
            invito a formar parte de este proyecto, aprende en línea, a tu ritmo
            y a precios accesibles...
          </p>
          <div className="button-hero">
            <Button title="Regístrate gratis" />
          </div>
        </div>
      </SectionContainer>
      </div>
    </section>
  );
};

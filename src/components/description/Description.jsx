import React from "react";

//components
import { SectionContainer } from "../sectionsContainer/Container";
//styles
import "./description.css";

export const Description = () => {
  return (
    <section className="description-container">
      <SectionContainer title="Construye proyectos">
        <div className="flex-container">
          <p>
            Crea sitios, páginas y aplicaciones
            web, arma un portafolio e impulsa tu carrera en el mundo del desarrollo.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
};

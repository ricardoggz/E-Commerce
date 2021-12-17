import React from "react";

/*styles*/
import "./hero.css";
//components
import { Button } from "../button/Button";
//img
import imgHero from "../../img/herobg.png";

export const Hero = () => {
  return (
    <section className="mision-container">
      <div className="flex-container description-container">
        <div>
          <h1>Crea tu carrera en tecnología...</h1>
          <p>
            Aprende sin límites, contamos con cursos donde te enseñamos las
            tecnologías más demandadas del mercado.
          </p>
          <p>
            Una iniciativa de{" "}
            <a href="https://github.com/ricardoggz" target="blank">
              @ricardo_guevarag
            </a>
          </p>
          <Button title="Regístrate gratis" />
        </div>
        <figure>
          <img src={imgHero} alt="loading img" />
        </figure>
      </div>
    </section>
  );
};

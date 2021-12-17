import React from "react";
//styles
import "./card.css";

//components
import { Button } from "../button/Button";

export const Card = (props) => {
  return (
    <div className="card">
      <figure>
        <img src={props.img} alt="JS" />
      </figure>
      <div className="card-description">
        <ul>
          <li><b>{props.title}</b></li>
          <li>Contenido de video en línea</li>
          <li>Acceso de por vida al curso</li>
          <li className="price"><i>{props.price}</i></li>
        </ul>
      </div>
      <div className="button-card">
        {" "}
        <Button title="Adquirir Curso" />
      </div>
    </div>
  );
};

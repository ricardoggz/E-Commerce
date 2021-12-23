import React from "react";
//styles
import "./card.css";
//icons
import { BsCheckLg } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";

export const Card = (props) => {
  return (
    <div className="card">
      <figure>
        <img src={props.img} alt="JS" />
      </figure>
      <div className="card-description">
        <ul>
          <li className="name">{props.title}</li>
          <li><BsCheckLg />Contenido de video en línea</li>
          <li><BsCheckLg />Acceso de por vida al curso</li>
          <li><FiUserCheck />Instructor: Ricardo Guevara</li>
          <li className="price">{props.price}</li>
        </ul>
      </div>
      
    </div>
  );
};

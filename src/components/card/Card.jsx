import React from "react";
//styles
import "./card.css";
//icons
import { BsCheckLg } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
//context
import useCard from "../../hooks/useCard";

export const Card = ({title, image}) => {
  const card = {
    content: "Contenido de video en línea",
    acces: "Acceso de por vida al curso",
    coach: "Ricardo Guevara",
  }
  const { price }= useCard();
  
  return (
    <div className="card">
      <figure>
        <img src ={image} alt="JS" />
      </figure>
      <div className="card-description">
        <ul>
          <li className="name">{title}</li>
          <li><BsCheckLg />{card.content}</li>
          <li><BsCheckLg />{card.acces}</li>
          <li><FiUserCheck />Instructor: {card.coach}</li>
          <li className="price">{price}</li>
        </ul>
      </div>
      
    </div>
  );
};

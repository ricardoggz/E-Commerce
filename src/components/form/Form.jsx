import React from "react";
//icons
import { FiUser } from "react-icons/fi";
//components
import { Button } from "../button/Button";
//styles
import "./login.css";

export const Form = () => {
  return (
    <section className="login">
      <form className="form-container">
        <FiUser className="icon-form" />
        <span className="title-form">Iniciar sesión</span>
        <label>Nombre de usuario</label>
        <input type="text" placeholder="Escribe tu nombre de usuario" />
        <label>Contraseña</label>
        <input
          type="password"
          name=""
          id=""
          placeholder="Escribe tu cotraseña"
        />
        <Button title="Iniciar sesión" />
      </form>
    </section>
  );
};

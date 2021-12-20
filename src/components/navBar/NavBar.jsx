import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

//images
import logoIMG from "../../img/logo.png";

//icons
import { HiMenu } from "react-icons/hi";

//styles
import "./navBar.css";

//Routes
import { RoutesApp } from "../../routes/routes";

export const NavBar = () => {
  return (
    <Router>
      <header>
        <div className="nav-container flex-container">
          <Link to="/">
            <img src={logoIMG} alt="LOGO" className="logo" />
          </Link>
          <nav>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="bar-btn">
              <HiMenu />
            </label>
            <ul className="list-menu">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/cursos">Tienda</Link>
              </li>
              <li>
                <Link to="/">Iniciar sesión</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <RoutesApp />
    </Router>
  );
};

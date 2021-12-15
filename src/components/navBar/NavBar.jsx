import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

//images
import logoIMG from "../../img/logo.png";

//icons
import { HiMenu } from "react-icons/hi";

//styles
import "./navBar.css";

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
                <Link to="/">inicio</Link>
              </li>
              <li>
                <Link to="/">cursos</Link>
              </li>
              <li>
                <Link to="/">iniciar sesión</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Router>
  );
};

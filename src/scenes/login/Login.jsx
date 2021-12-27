import React from 'react'
//components
import { SectionContainer } from '../../components/sectionsContainer/Container'
import {Button} from "../../components/button/Button";

//styles
import "./login.css";

export const Login = () => {
    return (
        <SectionContainer title="Iniciar Sesión">
                <form className="form-container">
                    <label>Nombre de usuario</label>
                    <input type="text" placeholder="Escribe tu nombre de usuario" />
                    <label>Contraseña</label>
                    <input type="password" name="" id="" placeholder="Escribe tu cotraseña" />
                    <Button title="Iniciar sesión" />
                </form>
        </SectionContainer>
    )
}

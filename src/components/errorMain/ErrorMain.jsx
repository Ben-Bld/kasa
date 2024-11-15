import React from "react";
import { Link } from "react-router-dom";


export function ErrorMain() {
    return (
        <div className="container">
            <p className="container__errorNumber">404</p>
            <p className="container__errorText">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="container__errorLinkHome">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}
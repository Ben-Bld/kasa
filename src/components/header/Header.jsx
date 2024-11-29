// Composant Header : affiche le logo et la navigation principale
import React from "react";
import logo from "../../assets/images/logo/LOGO.svg";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            {/* Logo du site */}
            <img className="logo" src={logo} alt="Logo Kasa" />

            {/* Barre de navigation */}
            <nav className="nav-header">
                <Link
                    to="/"
                    className={
                        window.location.pathname === "/"
                            ? "nav-header__nav-url_on"
                            : "nav-header__nav-url"
                    } //on change la classe pour gérer l'underline. si on est sur accueil, underline, sinon, pas underline
                >
                    Accueil
                </Link>
                <Link
                    to="/about"
                    className={
                        window.location.pathname === "/about"
                            ? "nav-header__nav-url_on"
                            : "nav-header__nav-url"
                    }//on change la classe pour gérer l'underline. si on est sur about, underline, sinon, pas underline
                >
                    À propos
                </Link>
            </nav>
        </header>
    );
}

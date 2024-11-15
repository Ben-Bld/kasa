import React from "react";
import logo from "../../assets/images/logo/LOGO.svg"
// import { Nav } from "../../components/nav/Nav"
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="" />
            <nav className="nav-header">
                {/* Si l'url actuel est /, le bouton accueil est underlined, si c'est about, le bouton about est underlined */}
                <Link to='/' className={window.location.pathname === "/" ? "nav-header__nav-url_on" : "nav-header__nav-url"}>   Accueil
                </Link>
                <Link to='/about' className={window.location.pathname === "/about" ? "nav-header__nav-url_on" : "nav-header__nav-url"}>   A propos
                </Link>


            </nav >
        </header>
    )
}
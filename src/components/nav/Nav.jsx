import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
    return (
        <nav className="nav-header">

            <Link to='/' className={window.location.pathname === "/" ? "nav-header__nav-url_on" : "nav-header__nav-url"}>   Accueil
            </Link>
            <Link to='/about' className={window.location.pathname === "/about" ? "nav-header__nav-url_on" : "nav-header__nav-url"}>   A propos
            </Link>


        </nav >
    )
}
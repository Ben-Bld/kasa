// Composant Footer : affiche le pied de page avec un logo et des informations de copyright
import React from "react";
import logo from "../../assets/images/logo/LOGO_DARK.png";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="footer">
            {/* Logo avec lien vers la page d'accueil */}
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="footer__logo" />
            </Link>

            {/* Texte de copyright */}
            <div className="footer__copyright">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
}

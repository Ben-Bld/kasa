import React from "react";
import logo from "../../assets/images/logo/LOGO_DARK.png"
import { Link } from "react-router-dom";


export function Footer() {
    return (
        <div className="footer">


            <Link to='/' > <img src={logo} alt="logo Kasa footer" className="footer__logo" /></Link>
            <div className="footer__copyright">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}
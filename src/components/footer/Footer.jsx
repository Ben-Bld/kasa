import React from "react";
import logo from "../../assets/images/logo/LOGO_DARK.png"

export function Footer() {
    return (
        <div className="footer">

            <img src={logo} alt="logo Kasa footer" className="footer__logo" />

            <div className="footer__copyright">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}
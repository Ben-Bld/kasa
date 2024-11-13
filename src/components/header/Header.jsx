import React from "react";
import logo from "../../assets/images/logo/LOGO.svg"
import { Nav } from "../../components/nav/Nav"


export function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="" />
            <Nav />
        </header>
    )
}
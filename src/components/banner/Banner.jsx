import React from "react";
import banner from "../../assets/images/banner/banner.png"


export function Banner({ source, text }) {
    return (
        <div className="banner">
            <img className="banner__img" src={source} alt="Baniere Kasa, plage" />
            <div className="banner__shadow"></div>
            <h2 className="banner__title">{text}</h2>
        </div>
    )
}
import React from "react";
import banner from "../../assets/images/banner/banner.png"


export function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src={banner} alt="Baniere Kasa, plage" />
            <div className="banner__shadow"></div>
            <h2 className="banner__title">Chez vous,<br className="banner__title__br"></br> partout et ailleurs</h2>
        </div>
    )
}
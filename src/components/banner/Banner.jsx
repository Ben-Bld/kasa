import React from "react";
import banner from "../../assets/images/banner/banner.png"


export function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src={banner} alt="Baniere Kasa, plage" />
        </div>
    )
}
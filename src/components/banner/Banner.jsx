import React from "react";



export function Banner({ source, text }) {
    return (
        <div className="banner">
            <img className="banner__img" src={source} alt="Bannière Kasa, plage" /> {/* Image de fond */}
            <div className="banner__shadow"></div> {/* Ombre noire superposée */}
            <h2 className="banner__title">{text}</h2> {/* Texte affiché sur la bannière */}
        </div>
    );
}
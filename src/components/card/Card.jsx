import React from "react";


export function Card(item) {
    return (
        <div className="card">
            {/* Ombre superposée à l'image */}
            <div className="card__cover-shadow"></div>

            {/* Image de la carte */}
            <img className="card__cover" src={item.cover} alt={item.title} />

            {/* Titre de la carte */}
            <div className="card__title">
                <p>{item.title}</p>
            </div>
        </div>
    );
}
// Composant Gallery : affiche une grille de cartes pour chaque logement
import React from "react";
import { Link } from "react-router-dom"; //importation de Link, qui permet de créer des liens vers d'autre pages pour naviguer dans l'app
import { Card } from "../card/Card";
import logements from "../../datas/logements.json";

export function Gallery() {
    return (
        <div className="gallery">
            {logements.map((item) => (
                <div key={item.id} className="gallery__item">
                    {/* Lien vers la page produit */}
                    <Link to={`/logements/${item.id}`}>  {/* on utilise Link, et to="" pour rediriger vers l'url de l'item qu'on sélectionne*/}
                        <Card cover={item.cover} title={item.title} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

// Composant FicheLogement : affiche les détails d'un logement sélectionné
import React from "react";
import logements from "../../datas/logements.json";
import { Slideshow } from "./Slideshow/Slideshow";
import { useParams } from "react-router-dom";
import { Host } from "./Host/Host";
import { LogementTitle } from "./LogementTitle/LogementTitle";
import { Rating } from "./Rating/Rating";
import { Tags } from "./Tags/Tags";
import { Collapse } from "../collapse/Collapse";

export function FicheLogement() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL actuel
    const logement = logements.find((item) => item.id === id); // Recherche le logement correspondant

    if (!logement) {
        return <p>Logement non trouvé.</p>; // Affiche un message si aucun logement n'est trouvé
    }

    const equipements = logement.equipments; // Liste des équipements du logement actpuel

    return (
        <div className="container-produit">
            {/* Carrousel d'images */}
            <Slideshow slide={logement.pictures} id={id} />

            {/* Détails principaux */}
            <div className="container-produit__details">
                <LogementTitle title={logement.title} lieu={logement.location} />
                <Host name={logement.host.name} avatar={logement.host.picture} />
                <Tags tags={logement.tags} />
                <Rating rating={logement.rating} />

                {/* Section collapsible */}
                <div className="container-produit__collapse">
                    <div className="container-produit__collapse___left">
                        <Collapse
                            key={`description-${id}`}
                            title="Description"
                            text={<p>{logement.description}</p>}
                        />
                    </div>
                    <div className="container-produit__collapse___right">
                        <Collapse
                            key={`equipments-${id}`}
                            title="Équipements"
                            text={equipements.map((item, index) => (
                                <p key={index} className="text-equipements">{item}</p>
                            ))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

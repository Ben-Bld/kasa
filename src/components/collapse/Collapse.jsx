import React, { useState } from "react";
import up from '../../assets/images/icons/up.svg';


export function Collapse({ title, text, type }) {
    const [isOpen, setIsOpen] = useState(false);
    // Fonction pour basculer l'état ouvert/fermé
    function toggleCollapse() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`collapse ${type || ''}`}> {/* Conteneur principal */}
            <div className="collapse__title">
                <p>{title}</p> {/* Titre du collapse */}
                <img
                    onClick={toggleCollapse}
                    src={up}
                    className={`collapse__title__arrow ${isOpen ? 'rotate-180' : ''}`}
                    alt="Toggle Collapse" // Bouton pour ouvrir/fermer
                />
            </div>
            <div key={"collapse-" + text} className={`collapse__text ${isOpen ? 'show' : ''}`}>
                <span>{text}</span> {/* Contenu affiché lorsque le collapse est ouvert */}
            </div>
        </div>
    );
}
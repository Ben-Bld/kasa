// Composant Rating : affiche une note sous forme d'étoiles
import starFull from "../../../assets/images/icons/starFull.svg";
import starEmpty from "../../../assets/images/icons/starEmpty.svg";

export function Rating({ rating }) {
    // Crée un tableau de true et de falses pour déterminer le rating
    // (true true true false false = 3/5, etc..)


    const stars = Array.from({ length: 5 }, (_, index) => index < rating);

    return (
        <div className="container-star">
            {stars.map((isFull, index) => (
                <img
                    key={index}
                    src={isFull ? starFull : starEmpty} // Affiche l'icône correspondante, si true = etoile pleine, si false, etoile vide
                    alt={isFull ? "Full Star" : "Empty Star"} // Texte alternatif
                    className="container-star__icon"
                />
            ))}
        </div>
    );
}

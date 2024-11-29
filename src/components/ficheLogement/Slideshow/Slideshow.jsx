// Composant Slideshow : carrousel d'images avec navigation
import left from "../../../assets/images/icons/left.svg";
import right from "../../../assets/images/icons/right.svg";
import { useState } from "react";

export function Slideshow({ slide }) {
    const [slideValue, changeSlide] = useState(0); // Index de l'image actuelle
    const [fade, setFade] = useState(false); // Gère l'effet de transition
    const length = slide.length - 1; // Dernier index des images

    // Passe à l'image suivante, ou revient à la première si on, arrive à la dernière
    function nextSlide() {
        setFade(true);
        setTimeout(() => {
            setFade(false);
            changeSlide(slideValue < length ? slideValue + 1 : 0);
        }, 500);
    }

    // Passe à l'image précédente, ou revient à la dernière si retourne depuis la première
    function prevSlide() {
        setFade(true);
        setTimeout(() => {
            setFade(false);
            changeSlide(slideValue > 0 ? slideValue - 1 : length);
        }, 500);
    }

    // Cache les flèches et la pagination si une seule image
    function hideControls() {
        return slide.length <= 1 ? "hide" : "";
    }

    return (
        <div className="container-slideshow">
            {/* Flèche gauche */}
            <div className={`container-slideshow__leftArrow ${hideControls()}`}>
                <img onClick={prevSlide} src={left} alt="Précédent" />
            </div>

            {/* Flèche droite */}
            <div className={`container-slideshow__rightArrow ${hideControls()}`}>
                <img onClick={nextSlide} src={right} alt="Suivant" />
            </div>

            {/* Pagination */}
            <div className={`container-slideshow__pageNumber ${hideControls()}`}>
                <p>{slideValue + 1}/{slide.length}</p>
            </div>

            {/* Image */}
            <img
                className={`container-slideshow__img ${fade ? "fade-out" : "fade-in"}`}
                src={slide[slideValue]}
                alt={`Slide ${slideValue + 1}`}
            />
        </div>
    );
}

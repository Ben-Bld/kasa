import { Link } from "react-router-dom";

/**
 * Composant affichant une page d'erreur 404 en cas d'url incorrect.
 * Propose un lien pour retourner à la page d'accueil.
 */
export function ErrorMain() {
    return (
        <div className="container-error">
            {/* Numéro de l'erreur */}
            <p className="container-error__errorNumber">404</p>

            {/* Texte explicatif de l'erreur */}
            <p className="container-error__errorText">Oups! La page que vous demandez n'existe pas.</p>

            {/* Lien vers la page d'accueil */}
            <Link to="/" className="container-error__errorLinkHome">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

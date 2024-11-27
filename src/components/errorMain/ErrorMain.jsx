
import { Link } from "react-router-dom";


export function ErrorMain() {
    return (
        <div className="container-error">
            <p className="container-error__errorNumber">404</p>
            <p className="container-error__errorText">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="container-error__errorLinkHome">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}
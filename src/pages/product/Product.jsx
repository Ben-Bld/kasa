// Page Product : affiche les détails d'un logement ou redirige vers une page d'erreur si l'ID est invalide
import { FicheLogement } from "../../components/ficheLogement/FicheLogement";
import { Navigate, useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import logements from "../../datas/logements.json";

export default function Product() {
    const { id } = useParams(); // Récupère l'ID de l'URL
    const logement = logements.find((item) => item.id === id); // Recherche le logement correspondant

    return !logement ? (
        // Redirection vers la page d'erreur si l'ID est invalide
        <Navigate to="/error" />
    ) : (
        <div className="product">
            {/* En-tête */}
            <Header />

            {/* Contenu principal */}
            <main>
                <FicheLogement />
            </main>

            {/* Pied de page */}
            <Footer />
        </div>
    );
}

// Page Error : affiche une page d'erreur avec un en-tête, un message d'erreur, et un pied de page
import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { ErrorMain } from "../../components/errorMain/ErrorMain";

export default function Error() {
    return (
        <div className="error">
            {/* En-tête */}
            <Header />

            {/* Contenu principal de l'erreur */}
            <ErrorMain />

            {/* Pied de page */}
            <Footer />
        </div>
    );
}

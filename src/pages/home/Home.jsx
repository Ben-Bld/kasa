// Page Home : affiche la page d'accueil avec une bannière, une galerie, un en-tête et un pied de page
import React from "react";
import { Header } from "../../components/header/Header.jsx";
import { Banner } from "../../components/banner/Banner.jsx";
import { Gallery } from "../../components/gallery/Gallery.jsx";
import { Footer } from "../../components/footer/Footer.jsx";
import source from "../../assets/images/banner/banner.png";

export default function Home() {
    return (
        <div className="home">
            {/* En-tête */}
            <Header />

            {/* Contenu principal */}
            <div className="main">
                <Banner source={source} text="Chez vous, partout et ailleurs" />
                <Gallery />
            </div>

            {/* Pied de page */}
            <Footer />
        </div>
    );
}

import React from "react";
import { Header } from "../../components/header/Header.jsx"
import { Banner } from "../../components/banner/Banner.jsx"
import { Gallery } from "../../components/gallery/Gallery.jsx"
import { Footer } from "../../components/footer/Footer.jsx"


export default function Home() {
    return (
        <div className="home">
            <Header />
            <div className="main">
                <Banner />
                <Gallery />
            </div>

            <Footer />


        </div>
    )
}
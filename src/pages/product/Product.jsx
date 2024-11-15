import React from "react"
import { Navigate, useParams } from 'react-router-dom';
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import logements from "../../datas/logements.json"
export default function Product() {
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id)
    return !logement ? (<Navigate to="/error" />) : (
        <div className="home">
            <Header />
            <p>Produit</p>
            <Footer />


        </div>
    )
}
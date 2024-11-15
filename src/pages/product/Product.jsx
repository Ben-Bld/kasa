import { FicheLogement } from '../../components/ficheLogement/FicheLogement';
import { Navigate, useParams } from 'react-router-dom';
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import logements from "../../datas/logements.json"


export default function Product() {
    const { id } = useParams(); //id = url actuel

    // Si jamais l'id dans l'url est différent de l'id cherché dans le JSON, on redirige vers la page d'erreur

    const logement = logements.find((item) => item.id === id)
    return !logement ? (<Navigate to="/error" />) : (
        <div className="home">
            <Header />
            <main>
                <FicheLogement />
            </main>
            <Footer />


        </div>
    )
}
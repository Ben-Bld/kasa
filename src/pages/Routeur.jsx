// Composant Routeur : gère les différentes routes de l'application
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home.jsx";
import About from "./about/About";
import Product from "./product/Product";
import Error from "./error/Error.jsx";

export function Routeur() {
    return (
        <div className="App">
            <BrowserRouter>
                <main>
                    <Routes>
                        {/* Page d'accueil */}
                        <Route exact path="/" element={<Home />} />

                        {/* Page À propos */}
                        <Route exact path="/about" element={<About />} />

                        {/* Page produit avec ID dynamique */}
                        <Route exact path="/logements/:id" element={<Product />} />

                        {/* Page d'erreur pour toutes les autres routes */}
                        <Route exact path="*" element={<Error />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default Routeur;

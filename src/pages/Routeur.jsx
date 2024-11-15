import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import "./css/main.css";
import Home from "./home/Home.jsx";
import About from "./about/About";
import Product from "./product/Product";
import Error from "./error/Error.jsx";

export function Routeur() {
    return (
        <div className="App">
            {/* <Header /> */}
            <BrowserRouter>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/logements/:id" element={<Product />} />
                        <Route exact path="*" element={<Error />} />
                    </Routes>
                </main>
            </BrowserRouter>

        </div>
    );
}

export default Routeur;
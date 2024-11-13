import {  BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import "./css/main.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Product from "./pages/product/Product";
// import Footer from "./components/Footer/Footer";
import Error from "./pages/error/Error.jsx";

function App() {
	return (
		<div className="App">
			{/* <Header /> */}
      <BrowserRouter>
      	<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<Product />} />
					<Route path="*" element={<Error />} />
				</Routes>
			  </main>
			{/* <Footer /> */}
      </BrowserRouter>
		
		</div>
	);
}

export default App;
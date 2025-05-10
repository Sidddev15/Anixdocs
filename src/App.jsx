import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playground from "./pages/Playground/Playground";
import Install from "./pages/Install/Install";
import "./App.css";
import Hero from "./pages/Hero/Hero";
import AnimationsGallery from "./pages/AnimationsGallery/AnimationsGallery";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Hero />}
				/>
				<Route
					path="/playground"
					element={<Playground />}
				/>
				<Route
					path="/docs"
					element={<Install />}
				/>
				<Route
					path="/animation-gallery"
					element={<AnimationsGallery />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sort from "./pages/Sort";
import ProsCons from "./pages/ProsCons";
import Random from "./pages/Random";
import ComingSoon from "./pages/ComingSoon";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sort" element={<ComingSoon />} />
				<Route path="/pros-cons" element={<ComingSoon />} />
				<Route path="/random" element={<ComingSoon />} />
			</Routes>
		</Router>
	);
}

export default App;

import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Lisa from "./pages/Lisa";
import Halda from "./pages/Halda";

function App() {
	return (
		<>
			<Link to="/">
				<button className="menu">Avaleht</button>
			</Link>
			<Link to="/lisa">
				<button className="menu">Lisa</button>
			</Link>
			<Link to="/halda">
				<button className="menu">Halda</button>
			</Link>

			<Routes>
				<Route path="/" element={<Avaleht />} />
				<Route path="/lisa" element={<Lisa />} />
				<Route path="/halda" element={<Halda />} />
			</Routes>
		</>
	);
}

export default App;

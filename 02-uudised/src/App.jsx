import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Uudised from "./pages/Uudised";
import Avaleht from "./pages/Avaleht";
import Kontakt from "./pages/Kontakt";
import Meist from "./pages/Meist";

function App() {
	return (
		<>
			<Link to="/">
				<button className="menu">Avalehele</button>
			</Link>
			<Link to="/uudised">
				<button className="menu">Uudised</button>
			</Link>
			<Link to="/kontakt">
				<button className="menu">Kontakt</button>
			</Link>
			<Link to="/meist">
				<button className="menu">Meist</button>
			</Link>

			<Routes>
				<Route path="/" element={<Avaleht />} />
				<Route path="uudised" element={<Uudised />} />
				<Route path="kontakt" element={<Kontakt />} />
				<Route path="meist" element={<Meist />} />
			</Routes>
		</>
	);
}

export default App;

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Vaata from "./pages/Vaata";
import Lisa from "./pages/Lisa";

function App() {
	return (
		<>
			<Link to="/">
				<button>Avalehele</button>
			</Link>
			<Link to="/all">
				<button>Vaata sülearvutid</button>
			</Link>
			<Link to="/add">
				<button>Lisa sülearvuti</button>
			</Link>

			<Routes>
				<Route path="/" element={<Avaleht />} />
				<Route path="/all" element={<Vaata />} />
				<Route path="/add" element={<Lisa />} />
			</Routes>
		</>
	);
}

export default App;

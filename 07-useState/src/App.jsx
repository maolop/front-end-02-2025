import { Link, Route, Routes } from "react-router-dom";
import Meist from "./pages/Meist";
import Kontakt from "./pages/Kontakt";
import Avaleht from "./pages/Avaleht";
import "./App.css";
import { useState, useRef } from "react";
import Kuud from "./pages/Kuud";
import Loomad from "./pages/Loomad";
import Sõnad from "./pages/Sõnad";

function App() {
	const [sisseLogitud, setSisseLogitud] = useState("ei");
	const [sonum, setSonum] = useState("");
	const kasutajaRef = useRef();
	const paroolRef = useRef();

	function logiSisse() {
		if (paroolRef.current.value === "123") {
			setSisseLogitud("jah");
			setSonum("Oled sisse logitud");
		} else {
			setSonum("Vale parool!");
		}
	}

	return (
		<>
			<div>{sonum}</div>
			<br />

			{sisseLogitud === "ei" && (
				<div>
					<label>Kasutaja</label>
					<input ref={kasutajaRef} type="text"></input>
					<label>Parool</label>
					<input ref={paroolRef} type="password"></input>
				</div>
			)}

			{sisseLogitud === "ei" && (
				<button onClick={() => logiSisse()}>Logi sisse</button>
			)}
			{sisseLogitud === "jah" && (
				<button
					onClick={() => {
						setSisseLogitud("ei");
						setSonum("Oled välja logitud");
					}}
				>
					Logi välja
				</button>
			)}
			<br />

			<Link to="/">
				<button>Avaleht</button>
			</Link>

			<Link to="/meist">
				<button>Meist</button>
			</Link>

			<Link to="/kontakt">
				<button>Kontakt</button>
			</Link>

			<Link to="/kuud">
				<button>Kuud</button>
			</Link>

			<Link to="/loomad">
				<button>Loomad</button>
			</Link>

			<Link to="/sõnad">
				<button>Sõnad</button>
			</Link>

			<Routes>
				<Route path="/" element={<Avaleht />} />
				<Route path="/meist" element={<Meist />} />
				<Route path="/kontakt" element={<Kontakt />} />
				<Route path="/kuud" element={<Kuud />} />
				<Route path="/loomad" element={<Loomad />} />
				<Route path="/sõnad" element={<Sõnad />} />\
			</Routes>
		</>
	);
}

export default App;

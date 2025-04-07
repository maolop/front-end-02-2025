import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import autodFailist from "../../data/autod.json";
import ostukorvJSON from "../../data/ostukorv.json";

function Autod() {
	const [autod, setAutod] = useState(autodFailist.slice());
	const otsingRef = useRef();

	const sorteeriHindKasv = () => {
		const sorteeritud = autod.toSorted((a, b) => a.hind - b.hind);
		setAutod(sorteeritud);
	};

	const sorteeriHindKah = () => {
		const sorteeritud = autod.toSorted((a, b) => b.hind - a.hind);
		setAutod(sorteeritud);
	};

	const sorteeriAZ = () => {
		autodFailist.sort((a, b) => a.nimi.localeCompare(b.nimi));
		setAutod(autodFailist.slice());
	};

	const sorteeriZA = () => {
		autodFailist.sort((a, b) => b.nimi.localeCompare(a.nimi));
		setAutod(autodFailist.slice());
	};

	const sorteeriKolmasTahtAZ = () => {
		autodFailist.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
		setAutod(autod.slice());
	};
	const sorteeriKasvavalt = () => {
		autod.sort((a, b) => a.nimi.length - b.nimi.length);
		setAutod(autod.slice());
	};

	const sorteeriKahanevalt = () => {
		autod.sort((a, b) => b.nimi.length - a.nimi.length);
		setAutod(autod.slice());
	};

	const sorteeriTeineO = () => {
		const vastus = autodFailist.filter((auto) => auto.nimi[1] === "o");
		setAutod(vastus);
	};

	const sorteeriSisaldabA = () => {
		const vastus = autod.filter((auto) => auto.nimi.includes("a"));
		setAutod(vastus);
	};

	const sorteeriPikkus4 = () => {
		const vastus = autod.filter((auto) => auto.nimi.length === 4);
		setAutod(vastus);
	};

	const sorteeriPikkus5plus = () => {
		const vastus = autod.filter((auto) => auto.nimi.length >= 5);
		setAutod(vastus);
	};

	const sorteeriLopebI = () => {
		// const vastus = autod.filter(auto => auto[auto.length - 1] === 'i')
		const vastus = autod.filter((auto) => auto.nimi.endsWith("i"));
		setAutod(vastus);
	};

	const reset = () => {
		setAutod(autodFailist.slice());
	};

	const otsi = () => {
		const vastus = autodFailist.filter((auto) =>
			auto.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase())
		);
		setAutod(vastus);
	};

	const lisaOstukorvi = (auto) => {
		const ostukorv = JSON.parse(localStorage.getItem("ostukorv")) || [];
		ostukorv.push(auto);
		localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
	};

	return (
		<>
			<label>Otsi:</label>
			<input ref={otsingRef} onChange={otsi} type="text" />
			<br />
			<button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriZA}>Sorteeri Z-A</button>
			<button onClick={sorteeriKolmasTahtAZ}>Sorteeri 3. täht A-Z</button>
			<button onClick={sorteeriKasvavalt}>Sorteeri tähemärgid kasvavalt</button>
			<button onClick={sorteeriKahanevalt}>Sorteeri tähemärgid kahanevalt</button>
			<button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
			<button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>
			<br />
			<br />
			<button onClick={sorteeriTeineO}>Jäta alles need, mille 2. täht on &quot;o&quot;</button>
			<button onClick={sorteeriSisaldabA}>Jäta alles need, milles on väike &quot;a&quot;</button>
			<button onClick={sorteeriPikkus4}>Jäta alles need, millel tähemärke täpselt 4</button>
			<button onClick={sorteeriPikkus5plus}>Jäta alles need, millel tähemärke vähemalt 5</button>
			<button onClick={sorteeriLopebI}>Jäta alles need, mis lõppevad &quot;i&quot; tähega</button>

			{autod.map((auto, index) => (
				<div key={auto.nimi}>
					{auto.nimi} - {auto.hind}€<button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button>
					<Link to={"/auto/" + index}>
						<button>Vt lähemalt</button>
					</Link>
				</div>
			))}

			<br />
			<div>Autosid {autod.length} tk</div>
			<button onClick={reset}>Reset</button>
		</>
	);
}

export default Autod;

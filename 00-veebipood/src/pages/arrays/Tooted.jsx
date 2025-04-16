import { Link } from "react-router-dom";
import tootedJson from "../../data/tooted.json";
import ostukorvJson from "../../data/ostukorv.json";
import { useRef, useState } from "react";

function Tooted() {
	const [tooted, setTooted] = useState(tootedJson);
	const otsingRef = useRef();

	const sorteeriAZ = () => {
		const sorteeritudTooted = tooted.slice().sort((a, b) => a.nimi.localeCompare(b.nimi));
		setTooted(sorteeritudTooted);
	};

	const sorteeriZA = () => {
		const sorteeritudTooted = tooted.slice().sort((a, b) => b.nimi.localeCompare(a.nimi));
		setTooted(sorteeritudTooted);
	};

	const sorteeriKasvavalt = () => {
		const sorteeritudTooted = tooted.slice().sort((a, b) => a.nimi.length - b.nimi.length);
		setTooted(sorteeritudTooted);
	};

	const sorteeriKahanevalt = () => {
		const sorteeritudTooted = tooted.slice().sort((a, b) => b.nimi.length - a.nimi.length);
		setTooted(sorteeritudTooted);
	};

	const sorteeriTeineTahtAZ = () => {
		const sorteeritudTooted = tooted.slice().sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
		setTooted(sorteeritudTooted);
	};

	const filtreeriKuni6tahelised = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.nimi.length <= 6);
		setTooted(filtreeritudTooted);
	};

	const filtreeri6tahelised = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.nimi.length === 6);
		setTooted(filtreeritudTooted);
	};

	const filtreeriLopebA = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.nimi.endsWith("a"));
		setTooted(filtreeritudTooted);
	};

	const filtreeriLopebY = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.nimi.endsWith("y"));
		setTooted(filtreeritudTooted);
	};

	const filtreeriPaarisarvulised = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.nimi.length % 2 === 0);
		setTooted(filtreeritudTooted);
	};

	const otsi = () => {
		setTooted(tootedJson.filter((i) => i.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase())));
	};

	const lisaOstukorvi = (toode) => {
		// ostukorvJson.push(toode);
		const ostukorv = JSON.parse(localStorage.getItem("ostukorv")) || [];
		ostukorv.push(toode);
		localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
	};

	return (
		<>
			<button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriZA}>Sorteeri Z-A</button>
			<button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
			<button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
			<button onClick={sorteeriTeineTahtAZ}>Sorteeri A-Z (teine täht)</button>
			<br />
			<button onClick={filtreeriKuni6tahelised}>Kuni 6-tähelised</button>
			<button onClick={filtreeri6tahelised}>Täpselt 6-tähelised</button>
			<button onClick={filtreeriLopebA}>a-ga lõppevad</button>
			<button onClick={filtreeriLopebY}>y-ga lõppevad</button>
			<button onClick={filtreeriPaarisarvulised}>paarisarvulised</button>
			<br />
			<br /> <label>Otsi toodet:</label>
			<input onChange={otsi} ref={otsingRef} type="text" />
			<br />
			<br />
			{tooted.map((toode, index) => (
				<div key={toode.nimi}>
					<span key={toode.nimi}>{toode.nimi}</span>
					<Link to={"/tooted/" + index}>
						<button>Vt lisaks</button>
					</Link>
					<button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
				</div>
			))}
			<br />
			<div>Näitan {tooted.length} toodet.</div>
			<button onClick={() => setTooted(tootedJson)}>Reset</button>
		</>
	);
}

export default Tooted;

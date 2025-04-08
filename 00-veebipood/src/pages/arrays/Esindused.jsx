import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import esindusedJson from "../../data/esindused.json";

import esindusedFailist from "../../data/esindused.json";

function Esindused() {
	const [esindused, setEsindused] = useState(esindusedFailist.slice());
	const otsingRef = useRef();

	// objektideks!
	// sorteeri A-Z
	// sorteeri Z-A
	// tähed kasvavalt
	// tähed kahanevalt
	// neljas täht A-Z
	// sorteeri sõnad arvu järgi

	// filtreeri e'ga lõppevad
	// vähemalt 7 tähelised
	// täpselt 9 tähelised
	// "is" lühendit sisaldavad
	// kellel on 4's täht "s"
	// paarisarv tähti sisaldavad

	const sortAZ = () =>
		setEsindused(
			esindused.toSorted((a, b) => a.keskus.localeCompare(b.keskus)),
		);
	const sortZA = () =>
		setEsindused(
			esindused.toSorted((a, b) => b.keskus.localeCompare(a.keskus)),
		);
	const sortCharsInc = () =>
		setEsindused(
			esindused.toSorted((a, b) => a.keskus.length - b.keskus.length),
		);
	const sortCharsDec = () =>
		setEsindused(
			esindused.toSorted((a, b) => b.keskus.length - a.keskus.length),
		);
	const sort4thAZ = () =>
		setEsindused(
			esindused.toSorted((a, b) => a.keskus[3].localeCompare(b.keskus[3])),
		);
	const sortWordCount = () =>
		setEsindused(
			esindused.toSorted(
				(a, b) => b.keskus.split(" ").length - a.keskus.split(" ").length,
			),
		);

	const filterEndsE = () =>
		setEsindused(esindused.filter((i) => i.keskus.endsWith("e")));
	const filter7pluschars = () =>
		setEsindused(esindused.filter((i) => i.keskus.length >= 7));
	const filter9chars = () =>
		setEsindused(esindused.filter((i) => i.keskus.length === 9));
	const filter4thisS = () =>
		setEsindused(esindused.filter((i) => i.keskus[3] === "s"));
	const filterEven = () =>
		setEsindused(esindused.filter((i) => i.keskus.length % 2 === 0));

	const otsi = () => {
		setEsindused(
			esindusedJson.filter((i) => i.keskus.includes(otsingRef.current.value)),
		);
	};

	return (
		<>
			<button onClick={sortAZ}>A-Z</button>
			<button onClick={sortZA}>Z-A</button>
			<button onClick={sortCharsInc}>Tähed kasvavalt</button>
			<button onClick={sortCharsDec}>Tähed kahanevalt</button>
			<button onClick={sort4thAZ}>4. täht A-Z</button>
			<button onClick={sortWordCount}>Sõnade arvu järgi</button>
			<br />
			<button onClick={filterEndsE}>Lõpeb e-ga</button>
			<button onClick={filter7pluschars}>Vähemalt 7 tähte pikk</button>
			<button onClick={filter9chars}>Täpselt 9 tähte</button>
			<button onClick={filter4thisS}>4. täht on s</button>
			<button onClick={filterEven}>Paarisarvulised</button>

			<br />
			<br />
			<label>Otsi: </label>
			<input ref={otsingRef} onChange={otsi} type="text" />

			<table>
				<thead>
					<tr>
						<th>Keskus</th>
						<th>Tel</th>
						<th>Aadress</th>
						<th>Vt lisaks</th>
					</tr>
				</thead>

				<tbody>
					{esindused.map((i, index) => (
						<tr key={i.keskus}>
							<td>{i.keskus}</td>
							<td>{i.tel}</td>
							<td>{i.aadress}</td>
							<td>
								<Link to={"/esindus/" + index}>Vaata</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div>Näitan {esindused.length} esindust</div>
			<button onClick={() => setEsindused(esindusedFailist)}>Reset</button>
		</>
	);
}

export default Esindused;

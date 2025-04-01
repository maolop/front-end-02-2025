import { useRef, useState } from "react";
import tootajadJson from "../../data/tootajad.json";
import { Link } from "react-router-dom";

function HaldaTootajad() {
	const [tootajad, setTootajad] = useState(tootajadJson);
	const nimiRef = useRef();
	const alaRef = useRef();
	const telRef = useRef();

	const kustuta = (index) => {
		tootajadJson.splice(index, 1);
		setTootajad(tootajadJson.slice());
	};

	const lisa = () => {
		const uusTootaja = {
			nimi: nimiRef.current.value,
			ala: alaRef.current.value,
			telefon: telRef.current.value,
		};

		tootajadJson.push(uusTootaja);
		setTootajad(tootajadJson.slice());
	};

	const countChars = () => {
		let count = 0;
		tootajad.forEach((i) => (count += i.nimi.length));
		return count;
	};

	return (
		<>
			<table>
				<tr>
					<th>Jrk nr</th>
					<th>Nimi</th>
					<th>Ala</th>
					<th>Telefon</th>
					<th>Muuda</th>
					<th>Kustuta</th>
				</tr>
				{tootajad.map((tootaja, index) => (
					<tr key={tootaja.nimi}>
						<td>{index + 1}</td>
						<td>{tootaja.nimi}</td>
						<td>{tootaja.ala}</td>
						<td>{tootaja.telefon}</td>
						<td>
							<Link to={"/muuda-tootaja/" + tootaja.nimi}>
								<button>&gt;</button>
							</Link>
						</td>
						<td>
							<button onClick={() => kustuta(index)}>&nbsp;x&nbsp;</button>
						</td>
					</tr>
				))}
			</table>
			<div>
				Näitan {tootajad.length} töötajat. Tähemärke kokku {countChars()}
			</div>
			<br />
			<div>Lisa uus töötaja:</div>
			<table className="invis-tab">
				<tr>
					<td className="invis-tab">
						<label>Nimi: </label>
						<br />
						<label>Ala: </label>
						<br />
						<label>Telefon: </label>
					</td>
					<td className="invis-tab">
						<input ref={nimiRef} type="text" />
						<br />
						<input ref={alaRef} type="text" />
						<br />
						<input ref={telRef} type="text" />
						<br />
					</td>
				</tr>
			</table>
			<button onClick={lisa}>Lisa</button>
		</>
	);
}

export default HaldaTootajad;

import { useState } from "react";
import tootajadJson from "../../data/tootajad.json";

function HaldaTootajad() {
	const [tootajad, setTootajad] = useState(tootajadJson);

	const kustuta = (index) => {
		setTootajad(tootajad.filter((i, index) => )
	}

	return (
		<>
			<table>
				<tr>
					<th>Jrk nr</th>
					<th>Nimi</th>
					<th>Ala</th>
					<th>Telefon</th>
					<th>Kustuta</th>
				</tr>
				{tootajad.map((tootaja, index) => (
					<tr key={tootaja.nimi}>
						<td>{index + 1}</td>
						<td>{tootaja.nimi}</td>
						<td>{tootaja.ala}</td>
						<td>{tootaja.telefon}</td>
						<td>
							<button onClick={() => kustuta(index)}>&nbsp;x&nbsp;</button>
						</td>
					</tr>
				))}
			</table>
			<div>Näitan {tootajad.length} töötajat.</div>
		</>
	);
}

export default HaldaTootajad;

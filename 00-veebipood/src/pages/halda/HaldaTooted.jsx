import { Link } from "react-router-dom";
import tootedFailist from "../../data/tooted.json";
import { useState } from "react";

function HaldaTooted() {
	const [, setTooted] = useState(tootedFailist);

	const kustuta = (index) => {
		tootedFailist.splice(index, 1);
		setTooted(tootedFailist.slice());
	};

	return (
		<>
			<table>
				<tr>
					<th>Index</th>
					<th>Nimi</th>
					<th>Hind </th>
					<th>Aktiivne?</th>
					<th>Pilt</th>
					<th>Muuda</th>
					<th>Kustuta</th>
				</tr>

				{tootedFailist.map((toode, index) => (
					<tr key={toode}>
						<td>{index}</td>
						<td>{toode.nimi}</td>
						<td>{toode.hind}</td>
						<td>{toode.aktiivne ? "jah" : "ei"}</td>
						<td>
							<img style={{ width: "100px" }} src={toode.pilt} alt="" />
						</td>
						<td>
							<Link to={"/muuda-toode/" + index}>
								<button>&gt;</button>
							</Link>
						</td>
						<td>
							<button onClick={() => kustuta(index)}>x</button>
						</td>
					</tr>
				))}
			</table>
			<div>Näitan {tootedFailist.length} toodet.</div>
		</>
	);
}

export default HaldaTooted;
// objektideks => nimi, hind, aktiivne, pilt

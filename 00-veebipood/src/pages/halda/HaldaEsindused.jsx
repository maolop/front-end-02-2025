import { useRef, useState } from "react";
import esindusedJson from "../../data/esindused.json";
import { Link } from "react-router-dom";

function HaldaEsindused() {
	const [, setEsindused] = useState(esindusedJson);
	const kskRef = useRef();
	const telRef = useRef();
	const addRef = useRef();

	const kustuta = (index) => {
		esindusedJson.splice(index, 1);
		setEsindused(esindusedJson.slice());
	};

	const lisa = () => {
		const uusEsindus = {
			keskus: kskRef.current.value,
			tel: telRef.current.value,
			aadress: addRef.current.value,
		};

		esindusedJson.push(uusEsindus);
		setEsindused(esindusedJson.slice());
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>keskus</th>
						<th>telefon</th>
						<th>aadress</th>
						<th>muuda</th>
						<th>kustuta</th>
					</tr>
				</thead>

				<tbody>
					{esindusedJson.map((esindus, index) => (
						<tr key={esindus.keskus}>
							<td>{esindus.keskus}</td>
							<td>{esindus.tel}</td>
							<td>{esindus.aadress}</td>
							<td>
								<Link to={"/muuda-esindus/" + esindus.keskus}>
									<button>&gt;</button>
								</Link>
							</td>
							<td>
								<button onClick={() => kustuta(index)}>X</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div>Kuvan {esindusedJson.length} esindust</div>
			<br />

			<div>Lisa esindus</div>
			<label>Keskus: </label>
			<input ref={kskRef} type="text" />
			<br />
			<label>Telefon: </label>
			<input ref={telRef} type="text" />
			<br />
			<label>Aadress: </label>
			<input ref={addRef} type="text" />
			<br />
			<button onClick={lisa}>Lisa</button>
		</>
	);
}

export default HaldaEsindused;

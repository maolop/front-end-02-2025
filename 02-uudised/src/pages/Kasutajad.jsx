import { useState } from "react";
import kasutajadJson from "../data/kasutajad.json";

function Kasutajad() {
	const [kasutajad, setKasutajad] = useState(kasutajadJson);

	const reset = () => {
		setKasutajad(kasutajadJson);
	};

	const filterLongerThan10 = () => {
		setKasutajad(kasutajad.filter((i) => i.username.length > 10));
	};

	const kustuta = (kustutaIndex) => {
		setKasutajad(kasutajad.filter((i, index) => index !== kustutaIndex));
	};

	const findLucio = () => {
		kasutajad.find((i, index) => {
			if (i.email === "Lucio_Hettinger@annie.ca") {
				console.log(`Found Lucio_Hettinger@annie.ca, index ${index}`);
				return true;
			}
		});
	};

	const findFirstC = () => {
		const firstC = kasutajad.find((i) => i.name.startsWith("C"));
		console.log(`Esimene C-ga algav nimi: ${firstC.name}`);
	};

	const looEmailid = () => {
		let emailsArr = [];
		kasutajad.forEach((i) => emailsArr.push(i.email));
		console.log(emailsArr);
	};

	const sorteeriLat = () => {
		setKasutajad(kasutajad.toSorted((a, b) => a.address.geo.lat - b.address.geo.lat));
	};

	const sorteeriPosLng = () => {
		setKasutajad(kasutajad.filter((i) => i.address.geo.lng > 0));
	};

	const liidaId = () => {
		let idSumma = 0;
		kasutajad.forEach((i) => (idSumma += i.id));
		console.log(`ID-de summa on ${idSumma}`);
	};

	const catchPhraseAtoE = () => {
		const uuedKasutajad = JSON.parse(JSON.stringify(kasutajad));
		uuedKasutajad.forEach((i) => (i.company.catchPhrase = i.company.catchPhrase.replaceAll("a", "e")));
		setKasutajad(uuedKasutajad);
	};

	return (
		<>
			<div className="heading">Kasutajad</div>
			<div>Näitan {kasutajad.length} kasutajat</div>

			<div style={{ textAlign: "right", marginRight: "40%" }}>
				<br />
				<div>
					Nulli nimekiri <button onClick={reset}>OK</button>
				</div>
				<div>
					Kuva kasutajad, kelle kasutajanimi on pikem kui 10 tähte <button onClick={filterLongerThan10}>OK</button>
				</div>
				<div>
					Leia ja logi Lucio Hettinger <button onClick={findLucio}>OK</button>
				</div>
				<div>
					Leia ja logi esimene C-ga algav kasutaja <button onClick={findFirstC}>OK</button>
				</div>
				<div>
					Sorteeri Lat järgi <button onClick={sorteeriLat}>OK</button>
				</div>
				<div>
					Näita ainult positiivse Lng-ga kasutajad <button onClick={sorteeriPosLng}>OK</button>
				</div>
				<div>
					Liida kokku ja logi kõikide kasutajate id-d <button onClick={liidaId}>OK</button>
				</div>
				<div>
					Loo emailide massiiv ja logi <button onClick={looEmailid}>OK</button>
				</div>
				<div>
					Asenda catchphrase-is kõik a-tähed e-tähtedega <button onClick={catchPhraseAtoE}>OK</button>
				</div>
			</div>

			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>name</th>
						<th>username</th>
						<th>email</th>
						<th>phone</th>
						<th>catchphrase</th>
						<th>address</th>
						<th>Kustuta</th>
					</tr>
				</thead>

				<tbody>
					{kasutajad.map((kasutaja, index) => (
						<tr key={kasutaja.name}>
							<td>{kasutaja.id}</td>
							<td>{kasutaja.name}</td>
							<td>{kasutaja.username}</td>
							<td>{kasutaja.email}</td>
							<td>000-{kasutaja.phone}</td>
							<td>{kasutaja.company.catchPhrase}</td>
							<td>
								<div>
									{kasutaja.address.street} {kasutaja.address.suite}
								</div>
								<div>{kasutaja.address.city}</div>
								<div>Zip: {kasutaja.address.zipcode}</div>
								<div>
									lat: {kasutaja.address.geo.lat} lng: {kasutaja.address.geo.lng}
								</div>
							</td>
							<td>
								<button onClick={() => kustuta(index)}>OK</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Kasutajad;

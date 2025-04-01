import { useRef, useState } from "react";
import tootajadJson from "../../data/tootajad.json";

function Tootajad() {
	const [tootajad, setTootajad] = useState(tootajadJson);
	const [kontakt, setKontakt] = useState("");
	const otsingRef = useRef();

	function votaYhendust(votaYhendustNimi) {
		const tootaja = tootajadJson.find((i) => i.nimi === votaYhendustNimi);
		setKontakt(`${tootaja.nimi} - tel ${tootaja.telefon}`);
	}

	const reset = () => {
		setTootajad(tootajadJson);
		setKontakt("");
	};

	const sorteeriAZ = () => {
		setTootajad(tootajad.toSorted((a, b) => a.nimi.localeCompare(b.nimi)));
	};

	const sorteeriZA = () => {
		setTootajad(tootajad.toSorted((a, b) => b.nimi.localeCompare(a.nimi)));
	};

	const sorteeriTahedKasvavalt = () => {
		setTootajad(tootajad.toSorted((a, b) => a.nimi.length - b.nimi.length));
	};

	const sorteeriTahedKahanevalt = () => {
		setTootajad(tootajad.toSorted((a, b) => b.nimi.length - a.nimi.length));
	};

	const sorteeriNeljasAZ = () => {
		setTootajad(tootajad.toSorted((a, b) => a.nimi[3].localeCompare(b.nimi[3])));
	};

	const sorteeriNimedeArvuJargi = () => {
		setTootajad(tootajad.toSorted((a, b) => b.nimi.split("-").length - a.nimi.split("-").length));
	};

	const filtreeriLopebI = () => {
		setTootajad(tootajad.filter((i) => i.nimi.endsWith("i")));
	};

	const filtreeriVahemaltKuueTahelised = () => {
		setTootajad(tootajad.filter((i) => i.nimi.length >= 6));
	};

	const filtreeriViieTahelised = () => {
		setTootajad(tootajad.filter((i) => i.nimi.length === 5));
	};

	const filtreeriSisaldabLuhendit = () => {
		setTootajad(tootajad.filter((i) => i.nimi.includes("hr") || i.nimi.includes("pr")));
	};

	const filtreeriNeljasTahtOnA = () => {
		setTootajad(tootajad.filter((i) => i.nimi[3] === "a"));
	};

	const filtreeriPaarisArvuline = () => {
		setTootajad(tootajad.filter((i) => i.nimi.length % 2 === 0));
	};

	const otsi = () => {
		setTootajad(tootajadJson.filter((i) => i.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase())));
	};

	return (
		<>
			<button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriZA}>Sorteeri Z-A</button>
			<button onClick={sorteeriTahedKasvavalt}>Sorteeri kasvavalt</button>
			<button onClick={sorteeriTahedKahanevalt}>Sorteeri kahanevalt</button>
			<button onClick={sorteeriNeljasAZ}>Sorteeri 4. täht A-Z</button>
			<button onClick={sorteeriNimedeArvuJargi}>Sorteeri nimede arvu järgi</button>
			<br />
			<button onClick={filtreeriLopebI}>I-ga lõppevad</button>
			<button onClick={filtreeriVahemaltKuueTahelised}>Vähemalt 6-tähelised</button>
			<button onClick={filtreeriViieTahelised}>Täpselt 5-tähelised</button>
			<button onClick={filtreeriSisaldabLuhendit}>Sisaldab lühendit</button>
			<button onClick={filtreeriNeljasTahtOnA}>Neljas täht on a</button>
			<button onClick={filtreeriPaarisArvuline}>Paarisarvulised</button>

			<br />
			<br />
			<label>Otsi töötajat: </label>
			<input ref={otsingRef} onChange={otsi} type="text" />
			<br />
			<br />
			<table>
				<tr>
					<th>Nimi</th>
					<th>Amet</th>
					<th>Kontakt</th>
				</tr>
				{tootajad.map((tootaja) => (
					<tr>
						<td>{tootaja.nimi}</td>
						<td>{tootaja.ala}</td>
						<td style={{ textDecoration: "underline", fontWeight: "bold" }}>
							<span onClick={() => votaYhendust(tootaja.nimi)}>Võta ühendust</span>
						</td>
					</tr>
				))}
			</table>
			<div>Näitan {tootajad.length} töötajat</div>
			<button onClick={reset}>Reset</button>
			{kontakt !== "" && <div>{kontakt}</div>}
		</>
	);
}

export default Tootajad;

import { useParams } from "react-router-dom";
import tootajadJson from "../../data/tootajad.json";

function YksTootaja() {
	const { nimi } = useParams();
	const tootaja = tootajadJson.find((i) => i.nimi === nimi);

	if (tootaja === undefined) return <h1>Töötajat ei leitud!</h1>;

	return (
		<>
			<div style={{ fontSize: "20px" }}>
				<div>Nimi: {tootaja.nimi}</div>
				<div>Ala: {tootaja.ala}</div>
				<div>Telefon: {tootaja.telefon}</div>
			</div>
		</>
	);
}

export default YksTootaja;

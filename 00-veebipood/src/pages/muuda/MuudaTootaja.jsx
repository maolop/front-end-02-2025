import { useNavigate, useParams } from "react-router-dom";
import tootajadJson from "../../data/tootajad.json";
import { useRef } from "react";

function MuudaTootaja() {
	const { nimi } = useParams();
	const tootaja = tootajadJson.find((i) => i.nimi === nimi);
	const navigate = useNavigate();
	const nimiRef = useRef();
	const alaRef = useRef();
	const telRef = useRef();

	const muuda = () => {
		const index = tootajadJson.findIndex((i) => i.nimi === nimi);
		tootajadJson[index].nimi = nimiRef.current.value;
		tootajadJson[index].ala = alaRef.current.value;
		tootajadJson[index].telefon = telRef.current.value;
		navigate("/halda-tootajad");
	};

	if (tootaja === undefined) return <h1>Töötajat ei leitud</h1>;

	return (
		<>
			<h2>Muudan töötajat {tootaja.nimi}</h2>
			<label>Nimi: </label>
			<input ref={nimiRef} defaultValue={tootaja.nimi} type="text" />
			<br />
			<label>Ala: </label>
			<input ref={alaRef} defaultValue={tootaja.ala} type="text" />
			<br />
			<label>Telefon: </label>
			<input ref={telRef} defaultValue={tootaja.telefon} type="text" />
			<br />
			<button onClick={muuda}>Muuda</button>
		</>
	);
}

export default MuudaTootaja;

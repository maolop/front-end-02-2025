import { useNavigate, useParams } from "react-router-dom";
import esindusedJson from "../../data/esindused.json";
import { useRef } from "react";

function MuudaEsindus() {
	const { nimi } = useParams();
	const esindus = esindusedJson.find((i) => i.keskus === nimi);
	const keskusRef = useRef();
	const telRef = useRef();
	const aadressRef = useRef();
	const mineTagasi = useNavigate();

	const uuenda = () => {
		const index = esindusedJson.findIndex((i) => i.keskus === nimi);
		esindusedJson[index].keskus = keskusRef.current.value;
		esindusedJson[index].tel = telRef.current.value;
		esindusedJson[index].aadress = aadressRef.current.value;
		mineTagasi("/halda-esindused");
	};

	if (esindus === undefined) return <h1>Esindust ei leitud!</h1>;

	return (
		<>
			<h2>Muudan {esindus.keskus} esindust</h2>
			<label>Keskus: </label>
			<input type="text" ref={keskusRef} defaultValue={esindus.keskus} />
			<br />
			<label>Telefon: </label>
			<input type="text" ref={telRef} defaultValue={esindus.tel} />
			<br />
			<label>Aadress: </label>
			<input type="text" ref={aadressRef} defaultValue={esindus.aadress} />
			<br />
			<button onClick={uuenda}>Valmis</button>
		</>
	);
}

export default MuudaEsindus;

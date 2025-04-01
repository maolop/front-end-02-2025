import { useNavigate, useParams } from "react-router-dom";
import tootedJson from "../../data/tooted.json";
import { useRef } from "react";

function MuudaToode() {
	const { index } = useParams();
	const toode = tootedJson[index];
	const nimiRef = useRef();
	const hindRef = useRef();
	const aktiivneRef = useRef();
	const piltRef = useRef();
	const mineTagasi = useNavigate();

	const uuenda = () => {
		tootedJson[index].nimi = nimiRef.current.value;
		tootedJson[index].hind = hindRef.current.value;
		tootedJson[index].pilt = piltRef.current.value;
		tootedJson[index].aktiivne = aktiivneRef.current.checked;
		mineTagasi("/halda-tooted");
	};

	return (
		<>
			<label>Nimi: </label>
			<input ref={nimiRef} defaultValue={toode.nimi} type="text" />
			<br />
			<label>Hind: </label>
			<input ref={hindRef} defaultValue={toode.hind} type="text" />

			<br />
			<label>Pilt: </label>
			<input ref={piltRef} defaultValue={toode.pilt} type="text" />
			<br />
			<label>Aktiivne: </label>
			<input
				ref={aktiivneRef}
				defaultChecked={toode.aktiivne}
				type="checkbox"
			/>
			<br />
			<button onClick={uuenda}>Valmis</button>
		</>
	);
}

export default MuudaToode;

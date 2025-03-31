import { useRef } from "react";
import autodFailist from "../../data/autod.json";
import { useNavigate, useParams } from "react-router-dom";

function MuudaAuto() {
	const { index } = useParams();
	const auto = autodFailist[index];
	const nimiRef = useRef();
	const hindRef = useRef();
	const piltRef = useRef();
	const aktiivneRef = useRef();
	const navigate = useNavigate();

	const muuda = () => {
		autodFailist[index].nimi = nimiRef.current.value;
		autodFailist[index].hind = hindRef.current.value;
		autodFailist[index].pilt = piltRef.current.value;
		autodFailist[index].aktiivne = aktiivneRef.current.checked;

		navigate("/halda-autod");
	};

	return (
		<>
			<label>Auto nimi:</label>
			<input ref={nimiRef} type="text" defaultValue={auto.nimi} />
			<br />
			<label>Auto hind:</label>
			<input ref={hindRef} type="text" defaultValue={auto.hind} />
			<br />
			<label>Auto pilt:</label>
			<input ref={piltRef} type="text" defaultValue={auto.pilt} />
			<br />
			<label>Auto aktiivne?</label>
			<input ref={aktiivneRef} type="checkbox" defaultChecked={auto.aktiivne} />
			<br />
			<button onClick={muuda}>Muuda</button>
		</>
	);
}

export default MuudaAuto;

import { useParams } from "react-router-dom";
import esindusedFailist from "../../data/esindused.json";
import esindusImg from "../../assets/esindus.jpg";

function YksEsindus() {
	const { jrknr } = useParams();
	const leitud = esindusedFailist[jrknr];

	if (leitud === undefined) return <div>Esindust ei leitud</div>;

	return (
		<>
			<img style={{ width: "800px" }} src={esindusImg} alt="" />
			<div style={{ fontSize: "20px" }}>
				<div>
					<b>{leitud.keskus} esindus</b>
				</div>
				<div>Telefon: {leitud.tel}</div>
				<div>Aadress: {leitud.aadress}</div>
			</div>
		</>
	);
}

export default YksEsindus;

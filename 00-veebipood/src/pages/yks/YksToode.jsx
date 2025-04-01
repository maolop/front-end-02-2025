import { useParams } from "react-router-dom";
import tootedJson from "../../data/tooted.json";

function YksToode() {
	const { index } = useParams();
	const toode = tootedJson[index];

	if (toode === undefined) return <h1>Toodet ei leitud!</h1>;

	return (
		<>
			<div>Toode: {toode.nimi}</div>
			<div>Hind: {toode.hind}</div>
			<div>Aktiivne: {toode.aktiivne ? "jah" : "ei"}</div>
			<div>Pilt: {toode.pilt !== "" ? toode.pilt : "puudub"}</div>
			{toode.pilt != "" && (
				<img style={{ width: "300px" }} src={toode.pilt} alt="" />
			)}
		</>
	);
}

export default YksToode;

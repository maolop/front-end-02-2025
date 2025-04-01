import { useParams } from "react-router-dom";
import tootajadJson from "../../data/tootajad.json"

function YksTootaja() {
	const { nimi } = useParams()
	tootaja = tootajadJson.find(i => i.name === nimi)

	return <div>YksTootaja</div>;
}

export default YksTootaja;

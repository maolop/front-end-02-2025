import { useParams } from "react-router-dom";
import kasutajadJson from "../../data/kasutajad.json";
import { useState } from "react";

function YksKasutaja() {
	const { email } = useParams();
	const kasutaja = kasutajadJson.find((i) => i.email === email);
	const [showPw, setShowPw] = useState(false);

	if (kasutaja === undefined) return <h1>Kasutajat ei leitud!</h1>;

	return (
		<>
			<div>Kasutaja email: {kasutaja.email}</div>
			<div>
				Kasutaja parool: {showPw ? kasutaja.parool : <button onClick={() => setShowPw(true)}>Näita parooli</button>}
			</div>
		</>
	);
}

export default YksKasutaja;

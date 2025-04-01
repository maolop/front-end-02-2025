import { useNavigate, useParams } from "react-router-dom";
import kasutajadJson from "../../data/kasutajad.json";
import { useRef } from "react";

function MuudaKasutaja() {
	const { email } = useParams();
	const kasutaja = kasutajadJson.find((i) => i.email === email);
	const emailRef = useRef();
	const pwRef = useRef();
	const navigate = useNavigate();

	const uuenda = () => {
		index = kasutajadJson.findIndex((i) => i.email === email);
		kasutajadJson[index].email = emailRef.current.value;
		kasutajadJson[index].parool = pwRef.current.value;
		navigate("/halda-esindused");
	};

	if (kasutaja === undefined) return <h1>Kasutajat ei leitud</h1>;

	return (
		<>
			<h2>Muudan kasutajat {kasutaja.email}</h2>
			<label>Email: </label>
			<input type="text" ref={emailRef} defaultValue={kasutaja.email} />
			<br />
			<label>Parool: </label>
			<input type="text" ref={pwRef} defaultValue={kasutaja.parool} />
			<br />
			<button onClick={uuenda}>Uuenda</button>
		</>
	);
}

export default MuudaKasutaja;

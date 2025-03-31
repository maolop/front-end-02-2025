import { useState } from "react";

function Kontakt() {
	const [aadress, setAadress] = useState("Tallinn");
	const [telefon, setTelefon] = useState("5512345");
	const [email, setEmail] = useState("peeter@gmail.com");
	const [ingKeelne, setIngKeelne] = useState("ei");

	const toEng = () => {
		setAadress("London");
		setTelefon("7742378");
		setEmail("john@voldemort.co.uk");
		setIngKeelne("jah");
	};

	return (
		<>
			<div>{aadress}</div>
			<div>{telefon}</div>
			<div>{email}</div>

			<button onClick={toEng}>Muuda inglisekeelseks</button>
			{ingKeelne === "jah" && <div>Leht on inglisekeelne.</div>}
		</>
	);
}

export default Kontakt;

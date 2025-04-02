import { useState } from "react";

export default function Kontakt() {
	const [phoneNr, setPhoneNr] = useState("(vali esindus)");
	const [iskuressaareActive, setIsKuressaareActive] = useState(false);
	const [isRakvereActive, setIsRakvereActive] = useState(false);
	const [isTapaActive, setIsTapaActive] = useState(false);

	return (
		<>
			<div className="heading">Kontaktid</div>
			<div>Võta meiega ühendust:</div>
			<br />
			<div className={iskuressaareActive ? "active-store" : ""}>Kuressaare</div>
			<div>Jõhvika 42</div>
			<button
				className="contact"
				onClick={() => {
					setPhoneNr("55216431");
					setIsKuressaareActive(true);
					setIsRakvereActive(false);
					setIsTapaActive(false);
				}}
			>
				Võta ühendust
			</button>
			<br />
			<div className={isRakvereActive ? "active-store" : ""}>Rakvere</div>
			<div>Kure 24A</div>
			<button
				className="contact"
				onClick={() => {
					setPhoneNr("51296612");
					setIsKuressaareActive(false);
					setIsRakvereActive(true);
					setIsTapaActive(false);
				}}
			>
				Võta ühendust
			</button>{" "}
			<br />
			<div className={isTapaActive ? "active-store" : ""}>Tapa</div>
			<div>Kastani 16</div>
			<button
				className="contact"
				onClick={() => {
					setPhoneNr("55620121");
					setIsKuressaareActive(false);
					setIsRakvereActive(false);
					setIsTapaActive(true);
				}}
			>
				Võta ühendust
			</button>
			<br />
			<h1>{"Telefon: " + phoneNr}</h1>
		</>
	);
}

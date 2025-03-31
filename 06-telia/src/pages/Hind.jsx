import { useState } from "react";
import nokia3210 from "../assets/3210.jpg";
import nokia3310 from "../assets/3310.jpg";
import nokia3410 from "../assets/3410.jpg";

function Hind() {
	const [valitudTelefon, setValitudTelefon] = useState("");
	const [valitudRam, setValitudRam] = useState("");

	function leiaHind(mudel, ram) {
		let telHind;
		let ramHind;

		if (ram == 4) ramHind = 1;
		else if (ram == 8) ramHind = 1.2;
		else if (ram == 16) ramHind = 1.6;
		else if (ram == 32) ramHind = 2.2;
		else return 0;

		if (mudel == 3210) telHind = 612;
		else if (mudel == 3310) telHind = 824;
		else if (mudel == 3410) telHind = 1046;
		else return 0;

		return Math.floor(ramHind * telHind);
	}

	return (
		<>
			<h1>Vali ja konfigureeri telefon</h1>

			<img
				onClick={() => setValitudTelefon(3210)}
				className={`telefon ${valitudTelefon == 3210 && "valitud-telefon"}`}
				src={nokia3210}
				alt=""
			/>
			<img
				onClick={() => setValitudTelefon(3310)}
				className={`telefon ${valitudTelefon == 3310 && "valitud-telefon"}`}
				src={nokia3310}
				alt=""
			/>
			<img
				onClick={() => setValitudTelefon(3410)}
				className={`telefon ${valitudTelefon == 3410 && "valitud-telefon"}`}
				src={nokia3410}
				alt=""
			/>

			<br />
			<button
				onClick={() => setValitudRam(4)}
				className={valitudRam == 4 && "valitud-ram"}
			>
				4MB
			</button>
			<button
				onClick={() => setValitudRam(8)}
				className={valitudRam == 8 && "valitud-ram"}
			>
				8MB
			</button>
			<button
				onClick={() => setValitudRam(16)}
				className={valitudRam == 16 && "valitud-ram"}
			>
				16MB
			</button>
			<button
				onClick={() => setValitudRam(32)}
				className={valitudRam == 32 && "valitud-ram"}
			>
				32MB
			</button>

			{valitudTelefon == "" && valitudRam != "" && (
				<div>Telefon on valimata.</div>
			)}
			{valitudTelefon != "" && valitudRam == "" && <div>RAM on valimata.</div>}
			{valitudTelefon == "" && valitudRam == "" && (
				<div>Telefon ja RAM on valimata.</div>
			)}

			{valitudTelefon != "" && valitudRam != "" && (
				<>
					<div>
						Nokia {valitudTelefon} + {valitudRam}MB RAM
					</div>
					<h2>{leiaHind(valitudTelefon, valitudRam)} EEK</h2>
					<button>Osta</button>
				</>
			)}
		</>
	);
}

export default Hind;

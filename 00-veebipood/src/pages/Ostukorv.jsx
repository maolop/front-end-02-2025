import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import ostukorvJSON from "../data/ostukorv.json";

function Ostukorv() {
	const [tooted, setTooted] = useState(
		JSON.parse(localStorage.getItem("ostukorv")) || [],
	);
	const { t } = useTranslation();

	const kustuta = (index) => {
		tooted.splice(index, 1);
		setTooted(tooted.slice());
		localStorage.setItem("ostukorv", JSON.stringify(tooted));
	};

	const hinnadKokku = () => {
		let kokku = 0;
		tooted.forEach((i) => (kokku += i.hind));
		return kokku;
	};

	// 1. võtta localStorage-st vana ostukorvi seis (localStorage.getItem)
	// 1b. kui on tühi, siis võtta tühi array (|| [])
	// 2. võtta localStorage-st saadud väärtustelt jutumärgid ära (JSON.parse)
	// 3. lisama ühe toote localStorage-st võetud seisule juurde (.push)
	// 4. panema localStorage-sse lisatava väärtustele jutumärgid tagasi (JSON.stringify)
	// 5. panema localStorage-sse selle lisatud tootega tagasi (localStorage.setItem)

	return (
		<>
			{tooted.length > 0 && (
				<button onClick={() => setTooted([])}>Tühjenda</button>
			)}

			{tooted.map((toode, index) => (
				<div key={index}>
					{toode.nimi}: {toode.hind}€
					<button onClick={() => kustuta(index)}>x</button>
					<br />
					<img className="ostukorv-toode" src={toode.pilt} alt="" />
				</div>
			))}

			{tooted.length === 0 && (
				<div>
					{t("cart.is-empty")}
					<br />
					<Link to="/tooted">Mine tooteid lisama</Link>
				</div>
			)}
			{tooted.length > 0 && <div>Ostukorvis on {tooted.length} toodet</div>}
			{tooted.length > 0 && <div>Summa kokku: {hinnadKokku()}€.</div>}
		</>
	);
}

export default Ostukorv;

import { useState, useRef } from "react";

export default function LaenuKalkulaator() {
	const ostuHindRef = useRef();
	const perioodRef = useRef();
	const [kuumakse, setKuumakse] = useState(364.58);
	const [ostuHind, setOstuHind] = useState(0);

	const uuendaKuumakse = () => {
		setKuumakse(((ostuHindRef.current.value / perioodRef.current.value / 12) * 1.2).toFixed(2));
		setOstuHind(ostuHindRef.current.value);
	};

	return (
		<>
			<label>Kinnisvara ostuhind</label>
			<br />
			<input type="number" ref={ostuHindRef} onChange={uuendaKuumakse} defaultValue="75000" />
			<br />

			<label>Periood</label>
			<br />
			<select ref={perioodRef} onChange={uuendaKuumakse} defaultValue="30">
				<option>15</option>
				<option>20</option>
				<option>25</option>
				<option>30</option>
			</select>

			{ostuHind >= 20000 && ostuHind <= 10000000 && <div>Kuumakse: {kuumakse}</div>}
			{(ostuHind < 20000 || ostuHind > 10000000) && <div>Laenusumma peab olema vahemikus 20,000 - 10,000,000</div>}
		</>
	);
}

import { useEffect, useRef, useState } from "react";
import { ParcelMachine } from "../models/ParcelMachine";

function ParcelMachines() {
	const [parcelMachinesDB, setParcelMachinesDB] = useState<ParcelMachine[]>([]);
	const [parcelMachines, setParcelMachines] = useState<ParcelMachine[]>([]);
	const pmRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		fetch("https://www.omniva.ee/locations.json")
			.then((data) => data.json())
			.then((data) => {
				setParcelMachinesDB(data);
				setParcelMachines(data);
			});
	}, []);

	const searchPMs = () => {
		const pmInput = pmRef.current;
		if (pmInput === null) return;
		setParcelMachines(parcelMachinesDB.filter((i) => i.NAME.toLowerCase().includes(pmInput.value.toLowerCase())));
	};

	return (
		<>
			<label>Otsi pakiautomaatidest:</label>
			<input onChange={searchPMs} ref={pmRef} type="text" />
			<br />
			<select>
				{parcelMachines
					.filter((pm) => pm.A0_NAME === "EE")
					.map((pm) => (
						<option key={pm.NAME}>{pm.NAME}</option>
					))}
			</select>
			<br />
		</>
	);
}

export default ParcelMachines;

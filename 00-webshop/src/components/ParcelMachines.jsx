import { useEffect, useRef, useState } from "react";

function ParcelMachines() {
	const [parcelMachinesDB, setParcelMachinesDB] = useState([]);
	const [parcelMachines, setParcelMachines] = useState([]);
	const pmRef = useRef();
	useEffect(() => {
		fetch("https://www.omniva.ee/locations.json")
			.then((data) => data.json())
			.then((data) => {
				setParcelMachinesDB(data);
				setParcelMachines(data);
			});
	}, []);

	const searchPMs = () => {
		setParcelMachines(parcelMachinesDB.filter((i) => i.NAME.toLowerCase().includes(pmRef.current.value.toLowerCase())));
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

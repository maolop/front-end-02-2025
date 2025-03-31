import { useState } from "react";

function Kuud() {
	const [kuud, setKuud] = useState([
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]);

	return (
		<>
			{kuud.map((i) => (
				<div>
					<span>{i}</span>
					<span onClick={() => setKuud(kuud.filter((j) => j !== i))}> [x]</span>
				</div>
			))}

			{kuud.length > 0 && <div>Kuvan {kuud.length} kuud.</div>}
			{kuud.length === 0 && <div>Kuusid ei ole enam!</div>}
		</>
	);
}

export default Kuud;

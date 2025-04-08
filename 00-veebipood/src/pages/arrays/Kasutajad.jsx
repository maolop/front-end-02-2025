import { useState } from "react";
import kasutajadFailist from "../../data/kasutajad.json";
import { Link } from "react-router-dom";

function Kasutajad() {
	const [kasutajad, setKasutajad] = useState(kasutajadFailist.slice());

	const sorteeriAZ = () => {
		const vastus = kasutajad.toSorted((a, b) => a.email.localeCompare(b.email));
		setKasutajad(vastus);
	};

	const sorteeriTahedKasv = () => {
		const vastus = kasutajad.toSorted(
			(a, b) => a.email.length - b.email.length,
		);
		setKasutajad(vastus);
	};

	return (
		<>
			{/* <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button> */}

			{kasutajad.map((kasutaja) => (
				<div key={kasutaja.email}>
					<span>{kasutaja.email}</span>
					<Link to={"/kasutajad/" + kasutaja.email}>
						<button>Vt lisaks</button>
					</Link>
				</div>
			))}
		</>
	);
}
export default Kasutajad;

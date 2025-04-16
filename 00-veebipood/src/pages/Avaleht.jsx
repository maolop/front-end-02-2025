import { useState } from "react";

function Avaleht() {
	const [laigitud, setLaigitud] = useState(false);
	const [count, setCount] = useState(0);
	const [sonum, setSonum] = useState("Muuda kogust");

	function muudaKogust(tegevus) {
		if (tegevus === "vähenda") {
			setCount(count - 1);
			setSonum("Kogus vähendatud");
		}
		if (tegevus === "suurenda") {
			setCount(count + 1);
			setSonum("Kogus suurendatud");
		}
	}

	return (
		<div>
			{laigitud ? <img src="/laigitud.svg" alt="" /> : <img src="/mittelaigitud.svg" alt="" />}
			<br />
			<button onClick={() => setLaigitud(!laigitud)}>Muuda like-i</button>
			<br />

			<button onClick={() => muudaKogust("vähenda")}>-</button>
			<span>{count}</span>
			<button onClick={() => muudaKogust("suurenda")}>+</button>

			<div>{sonum}</div>
		</div>
	);
}

export default Avaleht;

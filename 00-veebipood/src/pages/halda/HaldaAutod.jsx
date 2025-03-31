import { useRef, useState } from "react";
import autodFailist from "../../data/autod.json";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function HaldaAutod() {
	const [autod, setAutod] = useState(autodFailist);
	const nimiRef = useRef();
	const hindRef = useRef();
	const aktiivneRef = useRef();
	const piltRef = useRef();

	const kustuta = (index) => {
		autodFailist.splice(index, 1);
		setAutod(autodFailist.slice());
	};

	const sisesta = () => {
		if (nimiRef.current.value === "") {
			toast.error("Auto nimi on tühi");
			return;
		}

		if (Number(hindRef.current.value) <= 0) {
			toast.error("Hind on 0 või vähem");
			return;
		}

		autodFailist.push({
			nimi: nimiRef.current.value,
			hind: Number(hindRef.current.value),
			aktiivne: aktiivneRef.current.checked,
			pilt: piltRef.current.value,
		});
		setAutod(autodFailist.slice());
		nimiRef.current.value = hindRef.current.value = piltRef.current.value = "";
		aktiivneRef.current.checked = false;
		toast.success("Auto lisatud");
	};

	const arvutaTahemargid = () => {
		let kokku = 0;
		autod.forEach((auto) => (kokku += auto.nimi.length));
		return kokku;
	};

	const arvutaHinnad = () => {
		let kokku = 0;
		autod.forEach((auto) => (kokku += auto.hind));
		return kokku;
	};

	return (
		<>
			<label>Auto nimi:</label>
			<input ref={nimiRef} type="text" />
			<br />
			<label>Auto hind:</label>
			<input ref={hindRef} type="number" />
			<br />
			<label>Auto pilt:</label>
			<input ref={piltRef} type="text" />
			<br />
			<label>Auto aktiivne:</label>
			<input ref={aktiivneRef} type="checkbox" />
			<br />
			<button onClick={sisesta}>Sisesta</button>

			<div>Kokku {autod.length} auto(t)</div>
			<table>
				<thead>
					<tr>
						<th>Järjekorranr</th>
						<th>Index</th>
						<th>Auto nimi</th>
						<th>Auto hind</th>
						<th>Pilt</th>
						<th>Aktiivne?</th>
						<th>Kustuta</th>
					</tr>
				</thead>
				<tbody>
					{autod.map((auto, index) => (
						<tr key={auto}>
							<td>{index + 1}</td>
							<td>{index}</td>
							<td>{auto.nimi}</td>
							<td>{auto.hind}</td>
							<td>
								<img src={auto.pilt} alt="" className="auto-pilt" />
							</td>
							<td>{auto.aktiivne ? "aktiivne" : "mitteaktiivne"}</td>
							<td>
								<button onClick={() => kustuta(index)}>x</button>
							</td>
							<td>
								<Link to={"/muuda-auto/" + index}>
									<button>Muuda</button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>Tähemärke kokku: {arvutaTahemargid()}</div>
			<div>Hinnad kokku: {arvutaHinnad()}€</div>

			<ToastContainer position="top-right" autoClose={5000} theme="dark" />
		</>
	);
}

export default HaldaAutod;

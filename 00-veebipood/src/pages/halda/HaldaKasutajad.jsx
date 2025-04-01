import { useRef, useState } from "react";
import kasutajadJson from "../../data/kasutajad.json";
import { Link } from "react-router-dom";

function HaldaKasutajad() {
	const [, setKasutajad] = useState(kasutajadJson);
	const emailRef = useRef();
	const pwRef = useRef();

	const kustuta = (index) => {
		kasutajadJson.splice(index, 1);
		setKasutajad(kasutajadJson.slice());
	};

	const lisa = () => {
		const uusKasutaja = {
			email: emailRef.current.value,
			parool: pwRef.current.value,
		};

		kasutajadJson.push(uusKasutaja);
		setKasutajad(kasutajadJson.slice());
	};

	const findAvgPwLen = () => {
		if (kasutajadJson.length === 0) return 0;

		let pwLen = 0;
		kasutajadJson.forEach((i) => (pwLen += i.parool.length));
		return (pwLen / kasutajadJson.length).toFixed(2);
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>email</th>
						<th>parool</th>
						<th>muuda</th>
						<th>kustuta</th>
					</tr>
				</thead>
				<tbody>
					{kasutajadJson.map((kasutaja, index) => (
						<tr key={kasutaja.email}>
							<td>{kasutaja.email}</td>
							<td>{kasutaja.parool}</td>
							<td>
								<Link to={"/muuda-kasutaja/" + kasutaja.email}>
									<button>&gt;</button>
								</Link>
							</td>
							<td>
								<button onClick={() => kustuta(index)}>X</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div>Kuvan {kasutajadJson.length} kasutajat</div>
			<div>Keskmine paroolipikkus on {findAvgPwLen()}</div>

			<div>Lisa kasutaja</div>
			<label>email: </label>
			<input ref={emailRef} type="text" />
			<label> parool: </label>
			<input ref={pwRef} type="text" />
			<br />
			<button onClick={lisa}>Lisa</button>
		</>
	);
}

export default HaldaKasutajad;

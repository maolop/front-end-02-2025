import { useRef, useState } from "react";
import TegevusedJson from "../data/tegevused.json";

function Tegevused() {
	const [tegevused, setTegevused] = useState(TegevusedJson);
	const idRef = useRef();
	const lenRef = useRef();

	const filterById = () => {
		setTegevused(tegevused.filter((i) => i.id === Number(idRef.current.value)));
	};

	const filterByLen = () => {
		setTegevused(
			tegevused.filter((i) => i.title.length > Number(lenRef.current.value)),
		);
	};

	const filterbyCompleted = (completed) => {
		if (completed) setTegevused(tegevused.filter((i) => i.completed));
		else setTegevused(tegevused.filter((i) => !i.completed));
	};

	const reset = () => {
		setTegevused(TegevusedJson);
	};

	return (
		<>
			<div className="tegevused">
				<div>Tegevusi: {tegevused.length}</div>
				<div>
					Näita <b>id</b> järgi:{" "}
					<input ref={idRef} type="number" onChange={filterById} />
				</div>
				<div>
					Näita <b>pikemaid kui</b>:{" "}
					<input ref={lenRef} type="number" onChange={filterByLen} />
				</div>
				<div>
					Näita <button onClick={() => filterbyCompleted(true)}>valmis</button>{" "}
					/{" "}
					<button onClick={() => filterbyCompleted(false)}>mittevalmis</button>{" "}
					tegevusi
				</div>
				<div>
					<button onClick={reset}>Reset</button>
				</div>
			</div>

			<table>
				<tr>
					<th>userId</th>
					<th>id</th>
					<th>title</th>
					<th>completed</th>
				</tr>

				{tegevused.map((tegevus) => (
					<tr>
						<td>{tegevus.userId}</td>
						<td>{tegevus.id}</td>
						<td>{tegevus.title}</td>
						<td>{tegevus.completed ? "Y" : "N"}</td>
					</tr>
				))}
			</table>
		</>
	);
}

export default Tegevused;

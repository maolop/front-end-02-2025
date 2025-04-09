import { useEffect, useState } from "react";

function Riigid1() {
	const [riigid, setRiigid] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all?fields=name")
			.then((res) => res.json())
			.then((data) => setRiigid(data));
	}, []);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Common Name</th>
						<th>Official Name</th>
					</tr>
				</thead>

				<tbody>
					{riigid.map((item) => (
						<tr key={item.ZIP}>
							<td>{item.name.common}</td>
							<td>{item.name.official}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Riigid1;

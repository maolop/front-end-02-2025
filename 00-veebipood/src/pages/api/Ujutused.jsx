import { useEffect, useState } from "react";

function Ujutused() {
	const [floods, setFloods] = useState([]);

	useEffect(() => {
		fetch("https://environment.data.gov.uk/flood-monitoring/id/floods")
			.then((res) => res.json()) // kogu tagastus sellelt lehelt (metadata, headers, etc)
			.then((json) => setFloods(json.items)); // reaalne sisu, mida näen, kui lehe lahti teen
	}, []);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>location</th>
						<th>severity</th>
						<th>description</th>
					</tr>
				</thead>

				<tbody>
					{floods.map((item) => (
						<tr key={item.floodAreaId}>
							<td>{item.floodAreaID}</td>
							<td>{item.eaAreaName}</td>
							<td>{item.severity}</td>
							<td>{item.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Ujutused;

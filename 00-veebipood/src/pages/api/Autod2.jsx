import { useEffect, useState } from "react";

function Autod2() {
	const [autod, setAutod] = useState([]);

	useEffect(() => {
		fetch(
			"https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100"
		)
			.then((res) => res.json())
			.then((json) => setAutod(json.results));
	}, []);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>mark</th>
						<th>mudel</th>
						<th>displacement</th>
						<th>cylinders</th>
						{/* <th>maakond</th>
						<th>asula</th> */}
					</tr>
				</thead>

				<tbody>
					{autod.map((item) => (
						<tr key={item.model}>
							<td>{item.make}</td>
							<td>{item.model}</td>
							<td>{item.displ}</td>
							<td>{item.cylinders}</td>
							{/* <td>{item.A1_NAME}</td>
								<td>{item.A3_NAME}</td> */}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Autod2;

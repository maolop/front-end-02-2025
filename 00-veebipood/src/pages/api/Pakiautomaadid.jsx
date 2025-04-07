import { useEffect, useState } from "react";

function Pakiautomaadid() {
	const [pakiautomaadid, setPakiautomaadid] = useState([]);

	useEffect(() => {
		fetch("https://www.omniva.ee/locations.json")
			.then((res) => res.json())
			.then((json) => setPakiautomaadid(json));
	}, []);

	if (pakiautomaadid.length === 0) return <div>Loading..</div>;

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>zip</th>
						<th>nimi</th>
						<th>maakond</th>
						<th>asula</th>
					</tr>
				</thead>

				<tbody>
					{pakiautomaadid
						.filter((i) => i.A0_NAME === "EE")
						.map((item) => (
							<tr key={item.ZIP}>
								<td>{item.ZIP}</td>
								<td>{item.NAME}</td>
								<td>{item.A1_NAME}</td>
								<td>{item.A3_NAME}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
}

export default Pakiautomaadid;

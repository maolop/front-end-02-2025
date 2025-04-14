export default function Vaata() {
	const laptops = JSON.parse(localStorage.getItem("laptops") || "[]");

	return (
		<>
			<h1>Vaata sülearvuteid</h1>

			<table>
				<thead>
					<tr>
						<th>Tootja</th>
						<th>Mudel</th>
						<th>Hind</th>
					</tr>
				</thead>

				<tbody>
					{laptops.map((i) => (
						<tr key={`${i.manufacturer}-${i.model}`}>
							<td>{i.manufacturer}</td>
							<td>{i.model}</td>
							<td>{i.price}€</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

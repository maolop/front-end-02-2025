import { useEffect, useState } from "react";

function Raamatud2() {
	const [raamatud, setRaamatud] = useState([]);

	useEffect(() => {
		fetch("https://www.freetestapi.com/api/v1/books")
			.then((res) => res.json())
			.then((json) => setRaamatud(json));
	}, []);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>title</th>
						<th>author</th>
						<th>year</th>
					</tr>
				</thead>

				<tbody>
					{raamatud.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.author}</td>
							<td>{item.publication_year}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Raamatud2;

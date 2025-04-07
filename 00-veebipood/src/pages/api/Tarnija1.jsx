import { useEffect, useState } from "react";

function Tarnija1() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json()) // kogu tagastus sellelt lehelt (metadata, headers, etc)
			.then((json) => setProducts(json)); // reaalne sisu, mida näen, kui lehe lahti teen
	}, []);

	if (products.length === 0) return <div>Loading</div>;

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>title</th>
						<th>price</th>
						<th>description</th>
						<th>category</th>
						<th>image</th>
						<th>rating</th>
					</tr>
				</thead>

				<tbody>
					{products
						.filter((i) => i.rating.rate > 2.5)
						.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>{item.description}</td>
								<td>{item.category}</td>
								<td>
									<img style={{ width: "100px" }} src={item.image} alt="" />
								</td>
								<td>
									{item.rating.rate}
									<br />({item.rating.count} votes)
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
}

export default Tarnija1;

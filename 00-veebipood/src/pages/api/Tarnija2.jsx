import { useEffect, useState } from "react";

function Tarnija2() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
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
					</tr>
				</thead>

				<tbody>
					{products
						.filter((i) => i.creationAt === i.category.creationAt)
						.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>{item.description}</td>
								<td>{item.category.name}</td>
								<td>
									<img style={{ width: "100px" }} src={item.images[0]} alt="" />
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
}

export default Tarnija2;

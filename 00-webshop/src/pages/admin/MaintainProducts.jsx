import { useState } from "react";
import products from "../../data/products.json";
import styles from "../../css/MaintainProducts.module.css";
import { Link } from "react-router-dom";

function MaintainProducts() {
	const [, render] = useState(false);

	const deleteProduct = (index) => {
		products.splice(index, 1);
		render((x) => !x);
	};

	return (
		<>
			<h1>Admin Home &gt; Halda Tooteid</h1>
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
						<th>edit</th>
						<th>delete</th>
					</tr>
				</thead>

				<tbody>
					{products.map((item, index) => (
						<tr
							key={`${index}-${item.id}`}
							className={item.active ? styles.active : styles.inactive}
							style={{ border: "2px solid black" }}
						>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td style={{ width: "100px" }}>{item.price}€</td>
							<td style={{ width: "300px" }}>{item.description}</td>
							<td>{item.category}</td>
							<td>
								<img style={{ width: "100px" }} src={item.image} alt="" />
							</td>
							<td style={{ width: "100px" }}>
								{item.rating.rate}
								<br />({item.rating.count} votes)
							</td>
							<td style={{ width: "100px" }}>
								<Link to={"/admin/edit-product/" + item.id}>
									<button>&gt;</button>
								</Link>
							</td>
							<td style={{ width: "100px" }}>
								<button onClick={() => deleteProduct(index)}>X</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default MaintainProducts;

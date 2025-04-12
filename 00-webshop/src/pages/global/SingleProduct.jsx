import { useParams } from "react-router-dom";
import products from "../../data/products";

function SingleProduct() {
	const { id } = useParams();
	const product = products.find((e) => e.id === Number(id));

	return (
		<>
			<h1>Lisainfo</h1>
			<div style={{ width: "40%", margin: "auto" }}>
				<img
					style={{ width: "200px", marginBottom: "20px" }}
					src={product.image}
					alt=""
				/>
				<div style={{ marginBottom: "20px" }}>
					<b>
						{product.title} - {product.price.toFixed(2)}€
					</b>
				</div>
				<div style={{ marginBottom: "20px" }}>{product.description}</div>
				<div>
					Rated {product.rating.rate} ({product.rating.count} votes)
				</div>
			</div>
		</>
	);
}

export default SingleProduct;

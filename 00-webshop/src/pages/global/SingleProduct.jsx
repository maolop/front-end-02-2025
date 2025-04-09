import { useParams } from "react-router-dom";
import products from "../../data/products";

function SingleProduct() {
	const { id } = useParams();
	const product = products.find((e) => e.id === Number(id));

	return (
		<>
			<h1>Lisainfo</h1>
			<div>
				<img style={{ width: "200px" }} src={product.image} alt="" />
				<div>{product.title}</div>
				<div></div>
			</div>
		</>
	);
}

export default SingleProduct;

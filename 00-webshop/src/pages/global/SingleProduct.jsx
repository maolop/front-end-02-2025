import { useParams } from "react-router-dom";
import products from "../../data/products";
import { ToastContainer, toast } from "react-toastify";

function SingleProduct() {
	const { id } = useParams();
	const product = products.find((e) => e.id === Number(id));

	const addToCart = (product) => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		const productInCart = currentCart.find((p) => p.product.id === product.id);
		if (productInCart !== undefined) {
			// suurendan kogust
			productInCart.amount += 1;
		} else {
			// lisan uue kogusega 1
			currentCart.push({ product: product, amount: 1 });
		}

		localStorage.setItem("cart", JSON.stringify(currentCart));
		toast.success("Product added!");
	};

	return (
		<>
			<h1>Lisainfo</h1>
			<div style={{ width: "40%", margin: "auto" }}>
				<img style={{ width: "200px", marginBottom: "20px" }} src={product.image} alt="" />
				<div style={{ marginBottom: "20px" }}>
					<b>
						{product.title} - {product.price.toFixed(2)}€
					</b>
				</div>
				<div style={{ marginBottom: "20px" }}>{product.description}</div>
				<div>
					Rated {product.rating.rate} ({product.rating.count} votes)
				</div>
				<button onClick={() => addToCart(product)}>Lisa ostukorvi</button>
			</div>

			<ToastContainer />
		</>
	);
}

export default SingleProduct;

import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { CartProduct } from "../../models/CartProduct";

function SingleProduct() {
	const [products, setProducts] = useState<Product[]>([]);
	const productUrl = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/products.json";

	useEffect(() => {
		fetch(productUrl)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const { id } = useParams();
	const product = products.find((e) => e.id === Number(id));

	if (localStorage.getItem("cart") === null) localStorage.setItem("cart", "[]");

	const addToCart = (product: Product) => {
		const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
		const productInCart = currentCart.find((p: CartProduct) => p.product.id === product.id);
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

	if (product === undefined) return <div>Product not found</div>;

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

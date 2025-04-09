import products from "../../data/products";
import { ToastContainer, toast } from "react-toastify";
// import { useTranslation } from "react-i18next";

function HomePage() {
	// const { t, i18n } = useTranslation();
	const getCurrentCart = () => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		return currentCart;
	};

	// i18n.changeLanguage("en");

	if (getCurrentCart() === null || getCurrentCart() === "")
		localStorage.setItem("cart", "[]");

	const addToCart = (product) => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		currentCart.push(product);
		localStorage.setItem("cart", JSON.stringify(currentCart));
		toast.success("Product added!");
	};

	return (
		<>
			<h1>Avaleht</h1>
			{products.map((product) => (
				<div className="product" key={product.id}>
					<img style={{ width: "100px" }} src={product.image} />
					<div>{product.title}</div>
					<div>{product.price}</div>
					<button>Lisainfo</button>
					<button onClick={() => addToCart(product)}>Lisa ostukorvi</button>
				</div>
			))}

			<ToastContainer theme="dark" />
		</>
	);
}

export default HomePage;

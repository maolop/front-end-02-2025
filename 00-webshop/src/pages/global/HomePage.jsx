import products from "../../data/products";

function HomePage() {
	const getCurrentCart = () => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		return currentCart;
	};

	if (getCurrentCart() === null || getCurrentCart() === "")
		localStorage.setItem("cart", "[]");

	const addToCart = (product) => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		currentCart.push(product);
		localStorage.setItem("cart", JSON.stringify(currentCart));
	};

	return (
		<>
			{products.map((product) => (
				<div className="product" key={product.id}>
					<img style={{ width: "100px" }} src={product.image} />
					<div>{product.title}</div>
					<div>{product.price}</div>
					<button>Lisainfo</button>
					<button onClick={() => addToCart(product)}>Lisa ostukorvi</button>
				</div>
			))}
		</>
	);
}

export default HomePage;

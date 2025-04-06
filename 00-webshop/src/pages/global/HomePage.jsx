import products from "../../data/products";
import cart from "../../data/cart";

function HomePage() {
	return (
		<>
			{products.map((product) => (
				<div className="product" key={product.id}>
					<img style={{ width: "100px" }} src={product.image} />
					<div>{product.title}</div>
					<div>{product.price}</div>
					<button onClick={() => cart.push(product)}>Lisa ostukorvi</button>
				</div>
			))}
		</>
	);
}

export default HomePage;

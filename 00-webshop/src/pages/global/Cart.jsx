import { useState } from "react";

function Cart() {
	const getCurrentCart = () => JSON.parse(localStorage.getItem("cart"));

	if (getCurrentCart() === null || getCurrentCart() === "")
		localStorage.setItem("cart", "[]");

	const [cart, setCart] = useState(() => getCurrentCart());

	const deleteProduct = (index) => {
		const newCart = cart.slice();
		newCart.splice(index, 1);
		setCart(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
	};

	const deleteAll = () => {
		localStorage.setItem("cart", "[]");
		setCart([]);
	};

	const cartState = () => {
		if (cart.length === 0) {
			return <div>Ostukorv on tühi!</div>;
		} else {
			return (
				<div>
					<button onClick={deleteAll}>Tühjenda ostukorv</button>
				</div>
			);
		}
	};

	const findTotal = () => {
		let total = 0;
		cart.forEach((i) => (total += i.price));
		return total;
	};

	return (
		<>
			{cartState()}
			<div>
				Näitan {cart.length} toodet. Kokku {findTotal()}€.
			</div>
			{cart.map((product, index) => (
				<div className="product" key={`${index}-${product.id}`}>
					<img style={{ width: "100px" }} src={product.image} />
					<div>{product.title}</div>
					<div>{product.price}</div>
					<button onClick={() => deleteProduct(index)}>Kustuta</button>
				</div>
			))}
		</>
	);
}

export default Cart;

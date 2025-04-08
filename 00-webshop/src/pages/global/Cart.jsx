import { useState } from "react";

function Cart() {
	const [, setRender] = useState(false);

	const getCurrentCart = () => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		return currentCart;
	};

	if (getCurrentCart() === null || getCurrentCart() === "")
		localStorage.setItem("cart", "[]");

	const deleteProduct = (index) => {
		let newCart = getCurrentCart().slice();
		newCart.splice(index, 1);
		localStorage.setItem("cart", JSON.stringify(newCart));
		setRender((i) => !i);
	};

	const deleteAll = () => {
		localStorage.setItem("cart", "[]");
		setRender((i) => !i);
	};

	const cartState = () => {
		if (getCurrentCart().length === 0) {
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
		getCurrentCart().forEach((i) => (total += i.price));
		return total;
	};

	return (
		<>
			{cartState()}
			<div>
				Näitan {getCurrentCart().length} toodet. Kokku {findTotal()}€.
			</div>
			{getCurrentCart().map((product, index) => (
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

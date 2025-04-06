import { useState } from "react";
import cart from "../../data/cart";

function Cart() {
	const [, setCart] = useState();

	const deleteProduct = (index) => {
		cart.splice(index, 1);
		setCart(cart.slice());
	};

	const deleteAll = () => {
		cart.length = 0;
		setCart(cart.slice());
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

	return (
		<>
			{cartState()}

			{cart.map((product, index) => (
				<div className="product" key={product.id}>
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

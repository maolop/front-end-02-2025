import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../css/Cart.module.css";
import { Link } from "react-router-dom";
import ParcelMachines from "../../components/ParcelMachines";
import Payment from "../../components/Payment";

function Cart() {
	const getCurrentCart = () => JSON.parse(localStorage.getItem("cart"));

	if (getCurrentCart() === null) localStorage.setItem("cart", "[]");
	const [cart, setCart] = useState(() => getCurrentCart());

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

	const deleteAll = () => {
		localStorage.setItem("cart", "[]");
		setCart([]);
		toast.success("Cart is now empty!");
	};

	const findTotal = () => {
		let total = 0;
		cart.forEach((e) => (total += e.product.price * e.amount));
		return total.toFixed(2);
	};

	const totalProductsCount = () => {
		let total = 0;
		cart.forEach((e) => (total += e.amount));
		return total;
	};

	const decQuantity = (index) => {
		if (cart[index].amount > 1) {
			cart[index].amount--;
			setCart(cart.slice());
			localStorage.setItem("cart", JSON.stringify(cart));
		} else {
			deleteProduct(index);
		}
	};

	const deleteProduct = (index) => {
		const newCart = cart.slice();
		newCart.splice(index, 1);
		setCart(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
		toast.success("Product removed!");
	};

	const incQuantity = (index) => {
		cart[index].amount++;
		setCart(cart.slice());
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	return (
		<>
			<h1>Ostukorv </h1>
			{cartState()}
			<div>
				Näitan {cart.length} erinevat toodet, kokku {totalProductsCount()} toodet. Summa {findTotal()}€.
			</div>
			{cart.map((product, index) => (
				<div className={styles.product} key={`${index}-${product.id}`}>
					<Link to={"/product/" + product.product.id}>
						<img className={styles.image} src={product.product.image} />
					</Link>

					<div className={styles.title}>{product.product.title}</div>
					<div className={styles.price}>{product.product.price}€</div>

					<div className={styles.amount}>
						<img src="minus.png" className={styles.button} onClick={() => decQuantity(index)} />
						<span> {product.amount} </span>

						<img src="plus.png" className={styles.button} onClick={() => incQuantity(index)} />
						<div></div>
					</div>
					<div className={styles.total}>Kokku {product.product.price * product.amount}€</div>
					<img className={styles.rm} src="remove.png" onClick={() => deleteProduct(index)} alt="" />
				</div>
			))}

			<br />
			{cart.length > 0 && (
				<>
					<ParcelMachines />
					<Payment />
				</>
			)}
			<ToastContainer />
		</>
	);
}

export default Cart;

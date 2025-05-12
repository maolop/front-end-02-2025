import { Link } from "react-router-dom";
import styles from "../css/HomePage.module.css";
import { Product as ProductModel } from "../models/Product";
import { CartProduct } from "../models/CartProduct";
import { ToastContainer, toast } from "react-toastify";
import { CartSumContext } from "../context/CartSumContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../context/counterSlice";

function Product(props: { product: ProductModel }) {
	const { cartSum, setCartSum } = useContext(CartSumContext);
	const dispatch = useDispatch();
	const addToCart = (product: ProductModel) => {
		const currentCart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
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
		setCartSum(cartSum + product.price);
		dispatch(increment());
	};

	return (
		<>
			<div className={styles.product}>
				<img className={styles.image} src={props.product.image} />
				<div className={styles.title}>{props.product.title}</div>
				<div className={styles.price}>{props.product.price.toFixed(2)} eur</div>
				<Link to={"/product/" + props.product.id}>
					<button className={styles.btn}>Lisainfo</button>
				</Link>
				<button className={styles.btn} onClick={() => addToCart(props.product)}>
					Lisa ostukorvi
				</button>
			</div>

			<ToastContainer />
		</>
	);
}

export default Product;

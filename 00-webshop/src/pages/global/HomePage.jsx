import { Link } from "react-router-dom";
import products from "../../data/products";
import { ToastContainer, toast } from "react-toastify";
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/HomePage.module.css";

function HomePage() {
	if (JSON.parse(localStorage.getItem("cart")) === null)
		localStorage.setItem("cart", "[]");

	const addToCart = (product) => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		currentCart.push(product);
		localStorage.setItem("cart", JSON.stringify(currentCart));
		toast.success("Product added!");
	};

	return (
		<>
			<CarouselGallery />

			<h1>Avaleht</h1>
			<div className={styles.products}>
				{products.map((product, index) => (
					<div className={styles.product} key={index}>
						<img className={styles.image} src={product.image} />
						<div className={styles.title}>{product.title}</div>
						<div className={styles.price}>{product.price.toFixed(2)} eur</div>
						<Link to={"/product/" + product.id}>
							<button className={styles.btn}>Lisainfo</button>
						</Link>
						<button className={styles.btn} onClick={() => addToCart(product)}>
							Lisa ostukorvi
						</button>
					</div>
				))}
			</div>

			<ToastContainer />
		</>
	);
}

export default HomePage;

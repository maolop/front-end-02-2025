import { Link } from "react-router-dom";
// import products from "../../data/products";
import { ToastContainer, toast } from "react-toastify";
import CarouselGallery from "../../components/CarouselGallery.tsx";
import styles from "../../css/HomePage.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { CartProduct } from "../../models/CartProduct.ts";
import { Product } from "../../models/Product.ts";
import { Category } from "../../models/Category.ts";

function HomePage() {
	const { t, i18n } = useTranslation();

	const productUrl = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/products.json";
	const categoryUrl = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
	const [products, setProducts] = useState<Product[]>([]);
	const [productsDb, setProductsDb] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		fetch(productUrl)
			.then((res) => res.json())
			.then((json) => {
				setProducts(json);
				setProductsDb(json);
			});
	}, []);

	useEffect(() => {
		fetch(categoryUrl)
			.then((res) => res.json())
			.then((json) => setCategories(json));
	}, []);

	if (localStorage.getItem("cart") === null) localStorage.setItem("cart", "[]");

	const filterCategory = (cat: string) => {
		const filtered = productsDb.filter((product) => product.category === cat);
		setProducts(filtered);
	};

	const addToCart = (product: Product) => {
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
	};

	return (
		<>
			<CarouselGallery />

			<h1>{t("mainpage")}</h1>

			{categories.map((category) => (
				<button onClick={() => filterCategory(category.name)}>{category.name}</button>
			))}

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

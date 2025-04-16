//11.K 09.04 Webshopis - kujundus, Bootstrap (navbar+karusell-galerii)
//12.E 14.04 KOJU: Proovitöö (Nortal Bakery-shop). Aga proovige enne API faile teha + API asjad veebipoes (riigid2, autod2).
//13.K 16.04 API päring, pakiautomaadid ostukorvi. Andmebaas
//14.E 21.04 KOJU: Proovitöö
//15.K 23.04
//16.E 28.04 KOJU: Lõpuprojekt
//17.E 05.05
//18.E 12.05 - lõpuprojekti esitlemine

import { Link } from "react-router-dom";
import products from "../../data/products";
import { ToastContainer, toast } from "react-toastify";
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/HomePage.module.css";
import { useTranslation } from "react-i18next";

function HomePage() {
	const { t, i18n } = useTranslation();

	if (JSON.parse(localStorage.getItem("cart")) === null)
		localStorage.setItem("cart", "[]");

	const addToCart = (product) => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
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

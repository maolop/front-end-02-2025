// import products from "../../data/products";
import CarouselGallery from "../../components/CarouselGallery.tsx";
import styles from "../../css/HomePage.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Product as ProductModel } from "../../models/Product.ts";
import { Category } from "../../models/Category.ts";
import Product from "../../components/Product.tsx";

function HomePage() {
	const { t, i18n } = useTranslation();

	const productUrl = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/products.json";
	const categoryUrl = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
	const [products, setProducts] = useState<ProductModel[]>([]);
	const [productsDb, setProductsDb] = useState<ProductModel[]>([]);
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

	return (
		<>
			<CarouselGallery />

			<h1>{t("mainpage")}</h1>

			{categories.map((category) => (
				<button onClick={() => filterCategory(category.name)}>{category.name}</button>
			))}

			<div className={styles.products}>
				{products.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</div>
		</>
	);
}

export default HomePage;

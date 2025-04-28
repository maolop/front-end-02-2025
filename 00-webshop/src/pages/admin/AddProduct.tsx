import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { invalidField } from "../../util/validations";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";

function AddProduct() {
	const titleRef = useRef<HTMLInputElement>(null);
	const priceRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLInputElement>(null);
	const categoryRef = useRef<HTMLSelectElement>(null);
	const imageRef = useRef<HTMLInputElement>(null);
	const ratingRef = useRef<HTMLInputElement>(null);
	const voteCountRef = useRef<HTMLInputElement>(null);

	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const productUrl = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/products.json";
	const categoriesUrl = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

	useEffect(() => {
		fetch(productUrl)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		fetch(categoriesUrl)
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	const AddProduct = () => {
		if (
			titleRef.current === null ||
			priceRef.current === null ||
			descriptionRef.current === null ||
			categoryRef.current === null ||
			imageRef.current === null ||
			ratingRef.current === null ||
			voteCountRef.current === null
		)
			return;

		if (invalidField(titleRef.current.value, priceRef.current.value)) return;

		const newProduct = {
			id: products.length + 1,
			title: titleRef.current.value,
			price: Number(priceRef.current.value),
			description: descriptionRef.current.value,
			category: categoryRef.current.value,
			image: imageRef.current.value,
			active: true,
			rating: {
				rate: Number(ratingRef.current.value),
				count: Number(voteCountRef.current.value),
			},
		};

		products.push(newProduct);
		fetch(productUrl, { method: "PUT", body: JSON.stringify(products) });

		toast.success(`${titleRef.current.value} added`);

		titleRef.current.value = "";
		priceRef.current.value = "";
		descriptionRef.current.value = "";
		categoryRef.current.value = "";
		imageRef.current.value = "";
		ratingRef.current.value = "";
		voteCountRef.current.value = "";
	};

	return (
		<>
			<h1>Admin Home &gt; Lisa Toode</h1>

			<div style={{ marginRight: "45%", textAlign: "right" }}>
				<div>
					<label>title</label>
					<input ref={titleRef} type="text" />
				</div>

				<div>
					<label>price</label>
					<input ref={priceRef} type="text" />
				</div>

				<div>
					<label>description</label>
					<input ref={descriptionRef} type="text" />
				</div>

				{/* <div>
					<label>category</label>
					<input ref={categoryRef} type="text" />
				</div> */}

				<div>
					<label>category</label>
					<select ref={categoryRef}>
						{categories.map((cat) => (
							<option key={cat.name}>{cat.name}</option>
						))}
					</select>
				</div>

				<div>
					<label>image</label>
					<input ref={imageRef} type="text" />
				</div>

				<div>
					<label>rating</label>
					<input ref={ratingRef} type="text" />
				</div>

				<div>
					<label>vote count</label>
					<input ref={voteCountRef} type="text" />
				</div>
			</div>

			<button onClick={AddProduct}>Add</button>

			<ToastContainer />
		</>
	);
}

export default AddProduct;

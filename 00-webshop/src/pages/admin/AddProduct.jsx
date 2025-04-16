import { useRef } from "react";
import products from "../../data/products.json";
import categoriesJson from "../../data/categories.json";
import { ToastContainer, toast } from "react-toastify";
import { invalidField } from "../../util/validations";

function AddProduct() {
	const titleRef = useRef();
	const priceRef = useRef();
	const descriptionRef = useRef();
	const categoryRef = useRef();
	const imageRef = useRef();
	const ratingRef = useRef();
	const voteCountRef = useRef();

	const AddProduct = () => {
		if (invalidField(titleRef.current.value, priceRef.current.value)) return;

		const newProduct = {
			id: products.length + 1,
			title: titleRef.current.value,
			price: Number(priceRef.current.value),
			description: descriptionRef.current.value,
			category: categoryRef.current.value,
			image: imageRef.current.value,
			rating: {
				rate: Number(ratingRef.current.value),
				count: Number(voteCountRef.current.value),
			},
		};

		products.push(newProduct);

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
						{categoriesJson.map((cat) => (
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

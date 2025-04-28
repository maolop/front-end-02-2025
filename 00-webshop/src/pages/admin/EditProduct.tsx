import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import categoriesJson from "../../data/categories.json";

function EditProduct() {
	const itemId = Number(useParams().id);
	const [modified, setModified] = useState(false);
	const url = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/products.json";

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const index = items.findIndex((i) => i.id === itemId);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setItems(json);
				setLoading(false);
			});
	}, []);

	const titleRef = useRef();
	const priceRef = useRef();
	const descRef = useRef();
	const catRef = useRef();
	const imgRef = useRef();
	const ratingRef = useRef();
	const voteCountRef = useRef();
	const activeRef = useRef();

	const updateitem = () => {
		const updateditem = {
			id: itemId,
			title: titleRef.current.value,
			price: Number(priceRef.current.value),
			description: descRef.current.value,
			category: catRef.current.value,
			active: activeRef.current.value,
			image: imgRef.current.value,
			rating: {
				rate: Number(ratingRef.current.value),
				count: Number(voteCountRef.current.value),
			},
		};

		items[index] = updateditem;
		fetch(url, { method: "PUT", body: JSON.stringify(items) }).then(setModified(true));
	};

	if (loading) return <div>Loading..</div>;
	if (items[index] === undefined) return <div>Product not found</div>;

	return (
		<>
			<img style={{ marginTop: "30px", width: "300px" }} src={items[index].image} alt="" />

			<div style={{ marginTop: "30px", marginRight: "45%", textAlign: "right" }}>
				<div>
					<label>Title: </label>
					<input ref={titleRef} defaultValue={items[index].title}></input>
				</div>
				<div>
					<label>Price: </label>
					<input ref={priceRef} defaultValue={items[index].price}></input>
				</div>
				<div>
					<label>Description: </label>
					<input ref={descRef} defaultValue={items[index].description}></input>
				</div>
				{/* <div>
					<label>Category: </label>
					<input ref={catRef} defaultValue={items[index].category}></input>
				</div> */}
				<div>
					<label>Category: </label>
					<select ref={catRef} defaultValue={items[index].category}>
						{categoriesJson.map((e) => (
							<option key={e.name}>{e.name}</option>
						))}
					</select>
				</div>
				<div>
					<label>Image: </label>
					<input ref={imgRef} defaultValue={items[index].image}></input>
				</div>
				<div>
					<label>Rating: </label>
					<input ref={ratingRef} defaultValue={items[index].rating.rate}></input>
				</div>
				<div>
					<label>Nr of Votes: </label>
					<input ref={voteCountRef} defaultValue={items[index].rating.count}></input>
				</div>
				<div style={{ paddingRight: "80px" }}>
					<label>Active: </label>
					<input type="checkbox" ref={activeRef} defaultChecked={items[index].active}></input>
				</div>
			</div>
			<button style={{ marginTop: "20px" }} onClick={updateitem}>
				Submit
			</button>
			{modified && (
				<>
					<div>Toode {itemId} muudetud!</div>
					<Link to="/admin/maintain-products">Mine tagasi</Link>
				</>
			)}
		</>
	);
}

export default EditProduct;

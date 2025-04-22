import { useEffect, useRef, useState } from "react";
// import categoriesJson from "../../data/categories.json";
import { ToastContainer, toast } from "react-toastify";

function MaintainCategories() {
	const [categories, setCategories] = useState([]);
	const catRef = useRef();
	const url = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setCategories(json || []));
	}, []);

	const deleteCategory = (index) => {
		// toast.success(`${categoriesJson[index].name} deleted`);
		// categoriesJson.splice(index, 1);
		// setCategories(categoriesJson.slice());
		categories.splice(index, 1);
		setCategories(categories.slice());
		fetch(url, { method: "PUT", body: JSON.stringify(categories) });
	};

	const saveCategory = () => {
		const newCat = { name: catRef.current.value };
		categories.push(newCat);
		setCategories(categories.slice());
		toast.success(`${catRef.current.value} added`);
		fetch(url, { method: "PUT", body: JSON.stringify(categories) });
	};

	return (
		<>
			<h1>Halda Kategooriaid</h1>

			<div>
				<label>Category</label>
				<input ref={catRef} />
				<button onClick={saveCategory}>Add</button>
			</div>

			{categories.map((cat, index) => (
				<div key={cat.name}>
					{cat.name}
					<button onClick={() => deleteCategory(index)}>x</button>
				</div>
			))}

			<ToastContainer />
		</>
	);
}

export default MaintainCategories;

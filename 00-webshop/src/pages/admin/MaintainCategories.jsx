import { useRef, useState } from "react";
import categoriesJson from "../../data/categories.json";
import { ToastContainer, toast } from "react-toastify";

function MaintainCategories() {
	const [categories, setCategories] = useState(categoriesJson);
	const catRef = useRef();

	const deleteCategory = (index) => {
		toast.success(`${categoriesJson[index].name} deleted`);
		categoriesJson.splice(index, 1);
		setCategories(categoriesJson.slice());
	};

	const saveCategory = () => {
		const newCat = { name: catRef.current.value };
		categoriesJson.push(newCat);
		setCategories(categoriesJson.slice());
		toast.success(`${catRef.current.value} added`);
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

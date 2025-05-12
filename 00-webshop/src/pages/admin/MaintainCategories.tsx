import { useEffect, useRef, useState } from "react";
// import categoriesJson from "../../data/categories.json";
import { ToastContainer, toast } from "react-toastify";
import { Category } from "../../models/Category";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MaintainCategories() {
	const [categories, setCategories] = useState<Category[]>([]);
	const catRef = useRef<HTMLInputElement>(null);
	const url = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

	const [categoryId, setCategoryId] = useState(-1);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = (index: number) => {
		setCategoryId(index);
		setShow(true);
	};

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setCategories(json || []));
	}, []);

	const deleteCategory = (index: number) => {
		categories.splice(index, 1);
		setCategories(categories.slice());
		fetch(url, { method: "PUT", body: JSON.stringify(categories) });
		setShow(false);
	};

	const saveCategory = () => {
		if (catRef.current === null) return;
		const newCat = { name: catRef.current.value };
		categories.push(newCat);
		setCategories(categories.slice());
		toast.success(`${catRef.current.value} added`);
		fetch(url, { method: "PUT", body: JSON.stringify(categories) });
		catRef.current.value = "";
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
					<button onClick={() => handleShow(index)}>x</button>
				</div>
			))}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete category</Modal.Title>
				</Modal.Header>
				<Modal.Body>Delete category {categoryId}?</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={() => deleteCategory(categoryId)}>
						Delete
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>

			<ToastContainer />
		</>
	);
}

export default MaintainCategories;

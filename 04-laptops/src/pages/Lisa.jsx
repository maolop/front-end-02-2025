import { useRef, useState } from "react";

export default function Lisa() {
	const [message, setMessage] = useState("");

	const manufactRef = useRef();
	const modelRef = useRef();
	const priceRef = useRef();

	if (localStorage.getItem("laptops") === null) localStorage.setItem("laptops", "[]");

	function addProduct() {
		const laptops = JSON.parse(localStorage.getItem("laptops"));

		const newLaptop = {
			manufacturer: manufactRef.current.value,
			model: modelRef.current.value,
			price: priceRef.current.value,
		};

		laptops.push(newLaptop);
		localStorage.setItem("laptops", JSON.stringify(laptops));

		setMessage(`${manufactRef.current.value} ${modelRef.current.value} lisatud`);
	}

	return (
		<>
			<h1>Lisa sülearvuti</h1>
			<label>Mark </label>
			<input ref={manufactRef} type="text" />
			<label>Mudel</label>
			<input ref={modelRef} type="text" />
			<label>Hind</label>
			<input ref={priceRef} type="text" />
			<br />

			<button onClick={() => addProduct()}>Sisesta</button>
			<div>{message}</div>
		</>
	);
}

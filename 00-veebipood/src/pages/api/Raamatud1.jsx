import { useEffect, useRef, useState } from "react";

function Raamatud1() {
	const [books, setBooks] = useState([]);
	const [searchField, setSearchField] = useState("javascript");
	const searchRef = useRef();

	useEffect(() => {
		fetch("https://api.itbook.store/1.0/search/" + searchField)
			.then((res) => res.json())
			.then((json) => setBooks(json.books));
	}, [searchField]);

	const search = () => {
		if (searchRef.current.value.length < 3) return;
		if (searchRef.current.value.includes(" ")) return;
		setSearchField(searchRef.current.value);
	};

	return (
		<>
			<label>Otsi raamatut</label>
			<input
				defaultValue={searchField}
				onChange={search}
				ref={searchRef}
				type="text"
			/>

			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>title</th>
						<th>price</th>
						<th>description</th>
						<th>image</th>
					</tr>
				</thead>

				<tbody>
					{books.map((item) => (
						<tr key={item.title}>
							<td>{item.isbn13}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.subtitle}</td>
							<td>
								<img style={{ width: "100px" }} src={item.image} alt="" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default Raamatud1;

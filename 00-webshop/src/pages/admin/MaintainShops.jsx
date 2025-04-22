import { useEffect, useRef, useState } from "react";
import ContactUsMap from "../../components/ContactUsMap";

function MaintainShops() {
	const url = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
	const [shops, setShops] = useState([]);

	const nameRef = useRef();
	const addressRef = useRef();
	const linkRef = useRef();
	const longitudeRef = useRef();
	const latitudeRef = useRef();

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setShops(json || []));
	}, []);

	const addShop = () => {
		const newShop = {
			name: nameRef.current.value,
			address: addressRef.current.value,
			link: linkRef.current.value,
			longitude: longitudeRef.current.value,
			latitude: latitudeRef.current.value,
		};

		// setShops(shops.concat(newShop));
		shops.push(newShop);
		setShops(shops.slice());

		fetch(url, { method: "PUT", body: JSON.stringify(shops) });
	};

	const deleteShop = (index) => {
		shops.splice(index, 1);
		setShops(shops.slice());
		fetch(url, { method: "PUT", body: JSON.stringify(shops) });
	};

	return (
		<>
			<div>
				<label>Name</label>
				<input ref={nameRef} type="text" />
				<br />
				<label>Address</label>
				<input ref={addressRef} type="text" />
				<br />
				<label>Link</label>
				<input ref={linkRef} type="text" />
				<br />
				<label>Longitude</label>
				<input ref={longitudeRef} type="text" />
				<br />
				<label>Latitude</label>
				<input ref={latitudeRef} type="text" />
				<br />
				<button onClick={addShop}>Add</button>
			</div>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Address</th>
						<th>Link</th>
						<th>Longitude</th>
						<th>Latitude</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{shops.map((shop, index) => (
						<tr key={shop.name}>
							<td>{shop.name}</td>
							<td>{shop.address}</td>
							<td>{shop.link}</td>
							<td>{shop.longitude}</td>
							<td>{shop.latitude}</td>
							<td>
								<button onClick={() => deleteShop(index)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ContactUsMap />
		</>
	);
}

export default MaintainShops;

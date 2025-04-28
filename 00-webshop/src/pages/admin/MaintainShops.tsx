import { useEffect, useRef, useState } from "react";
import ContactUsMap from "../../components/ContactUsMap";
import { Shop } from "../../models/Shop";

function MaintainShops() {
	const url = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
	const [shops, setShops] = useState<Shop[]>([]);

	const nameRef = useRef<HTMLInputElement>(null);
	const addressRef = useRef<HTMLInputElement>(null);
	const linkRef = useRef<HTMLInputElement>(null);
	const longitudeRef = useRef<HTMLInputElement>(null);
	const latitudeRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setShops(json || []));
	}, []);

	const addShop = () => {
		if (
			nameRef.current === null ||
			addressRef.current === null ||
			linkRef.current === null ||
			longitudeRef.current === null ||
			latitudeRef.current === null
		)
			return;

		const newShop = {
			name: nameRef.current.value,
			address: addressRef.current.value,
			link: linkRef.current.value,
			longitude: Number(longitudeRef.current.value),
			latitude: Number(latitudeRef.current.value),
		};

		// setShops(shops.concat(newShop));
		shops.push(newShop);
		setShops(shops.slice());

		fetch(url, { method: "PUT", body: JSON.stringify(shops) });
	};

	const deleteShop = (index: number) => {
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

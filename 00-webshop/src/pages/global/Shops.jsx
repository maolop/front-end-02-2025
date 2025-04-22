import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Shops() {
	const url = "https://mattias-frontend-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
	const [shops, setShops] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setShops(json || []));
	}, []);

	return (
		<>
			<h1>Shops</h1>
			<MapContainer className="contact-map" center={[59.4154, 24.6468]} zoom={14} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{shops.map((shop) => (
					<Marker key={shop.name} position={[shop.longitude, shop.latitude]}>
						<Popup>
							{shop.name} <br />
							{shop.address}
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</>
	);
}

export default Shops;

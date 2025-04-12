import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function ContactUsMap() {
	return (
		<MapContainer
			className="contact-map"
			center={[59.4154, 24.6468]}
			zoom={16}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[59.4154, 24.6468]}>
				<Popup>Asume tiigi põhjas!</Popup>
			</Marker>
		</MapContainer>
	);
}

export default ContactUsMap;

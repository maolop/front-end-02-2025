import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Kaart() {
	return (
		<>
			<h1>Ülemist järv</h1>
			<div>
				<MapContainer className="kaart" center={[59.396, 24.765]} zoom={10} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[59.396, 24.765]}>
						<Popup>
							Ülemiste järv
							<br />
							<a
								target="_blank"
								href="https://www.google.com/maps/place/Lake+%C3%9Clemiste/@59.4015211,24.7258759,13z/data=!3m1!4b1!4m6!3m5!1s0x469294cb51e49c45:0x3729e6af12e5b251!8m2!3d59.3973524!4d24.7686295!16zL20vMDRkM3Ni?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
							>
								Vaata Google Mapsi
							</a>
						</Popup>
					</Marker>
				</MapContainer>
			</div>

			<h1>Harku järv</h1>
			<div>
				<MapContainer className="kaart" center={[59.416, 24.615]} zoom={10} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[59.416, 24.615]}>
						<Popup>
							Ülemiste järv
							<br />
							<a
								target="_blank"
								href="https://www.google.com/maps/place/Lake+Harku/@59.4167583,24.6082695,15z/data=!3m1!4b1!4m6!3m5!1s0x4692942db81b7715:0xaa3a88972f2b1c5a!8m2!3d59.4140288!4d24.6172046!16s%2Fm%2F03gxq9j?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
							>
								Vaata Google Mapsi
							</a>
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</>
	);
}

export default Kaart;

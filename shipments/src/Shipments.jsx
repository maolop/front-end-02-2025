import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shipments() {
	if (localStorage.getItem("shipments") === null) localStorage.setItem("shipments", "[]");
	const [shipments, setShipments] = useState(JSON.parse(localStorage.getItem("shipments")));

	useEffect(() => {
		if (localStorage.getItem("shipments") === "[]")
			fetch("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
				.then((res) => res.json())
				.then((data) => {
					localStorage.setItem("shipments", JSON.stringify(data));
					setShipments(data);
				});
	}, []);

	const deleteShipment = (orderNo) => {
		const newShipments = shipments.filter((e) => e.orderNo !== orderNo);
		localStorage.setItem("shipments", JSON.stringify(newShipments));
		setShipments(newShipments);
	};

	return (
		<table className="shipments">
			<thead>
				<tr>
					<th>ORDERNO</th>
					<th>DELIVERYDATE</th>
					<th>CUSTOMER</th>
					<th>TRACKINGNO</th>
					<th>STATUS</th>
					<th>CONSIGNEE</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{shipments.map((shipment) => (
					<tr key={shipment.orderNo}>
						<td>{shipment.orderNo}</td>
						<td>{shipment.date}</td>
						<td>{shipment.customer}</td>
						<td>{shipment.trackingNo}</td>
						<td>{shipment.status}</td>
						<td>{shipment.consignee}</td>
						<td className="actions">
							<Link to={"/order/" + shipment.orderNo}>
								<img src="/more.png" alt="See details" />
							</Link>
							<img src="/delete.png" alt="Delete shipment" onClick={() => deleteShipment(shipment.orderNo)} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Shipments;

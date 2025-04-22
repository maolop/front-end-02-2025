import { useRef } from "react";
import { Link, useParams } from "react-router-dom";

function Shipment() {
	const { orderNo } = useParams();
	const shipments = JSON.parse(localStorage.getItem("shipments"));
	const shipment = shipments.find((e) => e.orderNo === orderNo);
	const index = shipments.findIndex((e) => e.orderNo === orderNo);

	const orderNoRef = useRef();
	const customerRef = useRef();
	const consigneeRef = useRef();
	const dateRef = useRef();
	const trackingNoRef = useRef();
	const statusRef = useRef();

	const editShipment = () => {
		const changedShipment = {
			orderNo: orderNoRef.current.value,
			date: dateRef.current.value,
			customer: customerRef.current.value,
			trackingNo: trackingNoRef.current.value,
			status: statusRef.current.value,
			consignee: consigneeRef.current.value,
		};

		shipments[index] = changedShipment;
		localStorage.setItem("shipments", JSON.stringify(shipments));
	};

	return (
		<table className="shipment">
			<tbody>
				<tr>
					<td>
						<div className="info-text">Shipment details</div>
					</td>
				</tr>
				<tr>
					<td>
						<label>OrderNo</label>
						<input type="text" defaultValue={shipment.orderNo} ref={orderNoRef} />
						<label>customer</label>
						<input type="text" defaultValue={shipment.customer} ref={customerRef} />
						<label>consignee</label>
						<input type="text" defaultValue={shipment.consignee} ref={consigneeRef} />
					</td>
					<td>
						<label>date</label>
						<input type="text" defaultValue={shipment.date} ref={dateRef} />
						<label>trackingNo</label>
						<input type="text" defaultValue={shipment.trackingNo} ref={trackingNoRef} />
						<label>status</label>
						<input type="text" defaultValue={shipment.status} ref={statusRef} />
					</td>
				</tr>
				<tr>
					<td>
						<span className="info-text save" onClick={editShipment}>
							Save changes
						</span>
						<Link to="/">
							<span className="info-text">Go back</span>
						</Link>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Shipment;

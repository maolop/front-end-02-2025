import { Route, Routes } from "react-router-dom";
import "./App.css";
import Shipments from "./Shipments";
import Shipment from "./Shipment";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Shipments />} />
				<Route path="/order/:orderNo" element={<Shipment />} />
			</Routes>
		</>
	);
}

export default App;

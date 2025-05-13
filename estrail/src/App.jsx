import { Box } from "@mantine/core";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import FindJourneys from "./pages/FindJourneys";
import SearchResults from "./pages/SearchResults";
import PurchaseSingleTicket from "./pages/PurchaseSingleTicket";
import LogIn from "./pages/LogIn";
import PeriodTicket from "./pages/PeriodTicket";
import ZoneInfo from "./pages/ZoneInfo";
import Notifications from "./pages/Notifications";

function App() {
	return (
		<>
			<Header />
			<Box
				pt="20px"
				pb="20px"
				mt="20px"
				w={{ base: "100%", md: "60%" }}
				mx="auto"
				style={{ border: "1px solid black", borderRadius: "10px" }}
			>
				<Routes>
					<Route path="/" element={<FindJourneys />} />
					<Route path="/notifications" element={<Notifications/>}/>
					<Route path="/search-results" element={<SearchResults />} />
					<Route path="/purchase-single-ticket" element={<PurchaseSingleTicket />} />
					<Route path="/log-in" element={<LogIn />} />
					<Route path="/period-ticket" element={<PeriodTicket />} />
					<Route path="/zone-info" element={<ZoneInfo />} />
				</Routes>
			</Box>
		</>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/FrontPage";
import Programming from "./pages/Programming";
import DigitalArt from "./pages/DigitalArt";
import Consultation from "./pages/Consultation";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";

function App() {
	return (
		<>
			<img
				className="main-picture"
				src="https://www.theteachest.co.za/wp-content/uploads/2024/01/Man-drinking-tea-banner.jpg"
				alt="Banner"
			/>
			<div className="rectangle"></div>

			<Navbar />

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/programming" element={<Programming />} />
				<Route path="/digital-art" element={<DigitalArt />} />
				<Route path="/consultation" element={<Consultation />} />
				<Route path="/courses" element={<Courses />} />
			</Routes>

			<br />
			<i className="fa-brands fa-square-facebook"></i>
			<i className="fa-brands fa-square-twitter"></i>
			<i className="fa-brands fa-twitch"></i>
			<i className="fa-brands fa-square-youtube"></i>
			<i className="fa-brands fa-square-instagram"></i>
		</>
	);
}

export default App;

import NavBar from "./components/NavBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import News from "./Pages/News";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<News />} />
			</Routes>
		</>
	);
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n.js";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import store from "./app/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>
);

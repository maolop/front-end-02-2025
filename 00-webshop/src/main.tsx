import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "leaflet/dist/leaflet.css";
import "./i18n.ts";
import { CartSumContextProvider } from "./context/CartSumContext.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { store } from "./context/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<CartSumContextProvider>
				<AuthContextProvider>
					<Provider store={store}>
						<App />
					</Provider>
				</AuthContextProvider>
			</CartSumContextProvider>
		</BrowserRouter>
	</StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "./index.css";
import App from "./App.jsx";

const theme = createTheme({
	/** Put your mantine theme override here */
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<MantineProvider theme={theme}>
				<App />
			</MantineProvider>
		</BrowserRouter>
	</StrictMode>
);

import { useState } from "react";
import stations from "../data/stations.json";
import { Autocomplete, Button, Container, Notification, Text } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useNavigate } from "react-router-dom";

const stationNames = stations.map((station) => station.name);

function FindJourneys() {
	const [origin, setOrigin] = useState("");
	const [destination, setDestination] = useState("");
	const [date, setDate] = useState();
	const [notificationMessage, setNotificationMessage] = useState("");
	const navigate = useNavigate();

	const search = () => {
		if (!stationNames.includes(origin)) {
			setNotificationMessage("Palun vali korrektne lähtekoht!");
			return;
		}

		if (!stationNames.includes(destination)) {
			setNotificationMessage("Palun vali korrektne sihtkoht!");
			return;
		}

		if (origin === destination) {
			setNotificationMessage("Lähtekoht ja sihtkoht ei saa olla samad!");
			return;
		}

		if (date === undefined) {
			setNotificationMessage("Palun vali kuupäev!");
			return;
		}

		const direction1 = stations.find((station) => station.name === origin).direction;
		const direction2 = stations.find((station) => station.name === destination).direction;

		if (direction1 !== direction2) {
			if (direction1 !== "Tallinn" && direction2 !== "Tallinn") {
				setNotificationMessage("Lähtekoht ja sihtkoht ei ole samal suunal!");
				return;
			}
		}

		const originNr = stations.find((station) => station.name === origin).nr;
		const destinationNr = stations.find((station) => station.name === destination).nr;
		const stopsNr = Math.abs(destinationNr - originNr);

		navigate("/search-results", { state: { origin, destination, stopsNr, date } });
	};

	const validateInput = (stationName) => {
		if (stationName === "") return false;
		if (stationNames.includes(stationName)) return false;
		return true;
	};

	return (
		<>
			<Container w={{ base: "100%", md: "50%" }} pb="20px">
				<Autocomplete
					description="Lähtekoht"
					mt="lg"
					placeholder="Lähtekoht"
					data={stationNames}
					value={origin}
					onChange={setOrigin}
					limit={5}
					radius="md"
					size="md"
					width="20%"
					error={validateInput(origin)}
				/>
				<Autocomplete
					description="Sihtkoht"
					mt="lg"
					placeholder="Sihtkoht"
					data={stationNames}
					value={destination}
					onChange={setDestination}
					limit={5}
					radius="md"
					size="md"
					width="20%"
					error={validateInput(destination)}
				/>

				<DatePickerInput
					value={date}
					onChange={setDate}
					description="Date input"
					placeholder="Vali kuupäev.."
					radius="md"
					size="md"
					mt="lg"
					maxLevel="month"
					valueFormat="DD.MM.YYYY"
					popoverProps={{ position: "top", withinPortal: false }}
				/>
				<Container ta="center">
					<Button onClick={search} mt="lg">
						Otsi reise
					</Button>
				</Container>
				{notificationMessage != "" && (
					<Notification mt="10px" title="Viga!" onClose={() => setNotificationMessage("")}>
						{notificationMessage}
					</Notification>
				)}
			</Container>
		</>
	);
}

export default FindJourneys;

import { Box, Center, Checkbox, Container, Flex, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";

function PurchaseSingleTicket() {
	const location = useLocation();
	const { origin, destination, stopsNr, time, date } = location.state;
	const price = stopsNr * 0.38;

	return (
		<>
			<Flex justify="center" gap="xs">
				<Box>
					<Text>Lähtekoht:</Text>
					<Text>Sihtkoht:</Text>
					<Text>Peatuste arv:</Text>
					<Text>Kuupäev:</Text>
					<Text>Kellaaeg:</Text>
				</Box>
				<Box>
					<Text>{origin}</Text>
					<Text>{destination}</Text>
					<Text>{stopsNr}</Text>
					<Text>{date}</Text>
					<Text>{time}</Text>
				</Box>
			</Flex>
			<Box ta="center" mt="20px">
				<Center>
					<Checkbox label="Sooduspilet" mb="15px" />
				</Center>
				<Text size="2.5rem">Hind: {price}€</Text>
			</Box>
		</>
	);
}

export default PurchaseSingleTicket;

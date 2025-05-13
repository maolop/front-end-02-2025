import { Box, Center, Checkbox, Container, Flex, Input, Text } from "@mantine/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function PurchaseSingleTicket() {
	const location = useLocation();
	const { origin, destination, stopsNr, time, date } = location.state;
	const [discountChecked, setDiscountChecked] = useState(false);

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
			<Box ta="center" mt="20px" mb="20px">
				<Center>
					<Checkbox label="Sooduspilet" mb="15px" onChange={() => setDiscountChecked(!discountChecked)} />
				</Center>
				<Text size="2.5rem">Hind: {(discountChecked ? stopsNr * 0.33 : stopsNr * 0.44).toFixed(2)}€</Text>
			</Box>
			<Center>
				<Input.Wrapper description="Sisesta e-mail" size="md">
					<Input placeholder="E-mail" size="md" />
				</Input.Wrapper>
			</Center>
		</>
	);
}

export default PurchaseSingleTicket;

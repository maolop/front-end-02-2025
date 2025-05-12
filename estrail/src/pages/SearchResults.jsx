import { Box, Button, Container, Flex, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

const departureTimes = [
	"06:31",
	"08:42",
	"10:34",
	"12:59",
	"13:56",
	"15:51",
	"16:40",
	"17:18",
	"18:15",
	"19:22",
	"21:20",
	"22:25",
];

const SearchResults = () => {
	const location = useLocation();
	const { origin, destination, date, stopsNr } = location.state;
	const navigate = useNavigate();

	return (
		<>
			<Flex justify="center" gap="xs">
				<Box>
					<Text>Lähtekoht:</Text>
					<Text>Sihtkoht:</Text>
					<Text>Peatuste arv:</Text>
					<Text>Kuupäev:</Text>
				</Box>
				<Box>
					<Text>{origin}</Text>
					<Text>{destination}</Text>
					<Text>{stopsNr}</Text>
					<Text>{date}</Text>
				</Box>
			</Flex>
			<Container pt="20px">
				{departureTimes.map((time) => (
					<Flex key={time} justify="space-evenly" align="center" gap="xs" mb="20px">
						<Text size="30px">{time}</Text>
						<Button
							onClick={() =>
								navigate("/purchase-single-ticket", { state: { origin, destination, stopsNr, time, date } })
							}
						>
							Osta pilet
						</Button>
					</Flex>
				))}
			</Container>
		</>
	);
};

export default SearchResults;

import { Box, Container, Flex, Image, Text } from "@mantine/core";
import Banner from "/banner.png";
import { Link } from "react-router-dom";

const links = [
	{ name: "OTSI REISE", path: "/" },
	{ name: "OTSI REISE", path: "/" },
	{ name: "OTSI REISE", path: "/" },
	{ name: "OTSI REISE", path: "/" },
];

function Header() {
	return (
		<>
			<Box mt="20px" w={{ base: "100%", md: "60%" }} mx="auto" style={{ border: "1px solid black" }}>
				<Image src={Banner} style={{ borderBottom: "1px solid black" }} />
				<Flex justify="center" wrap="wrap">
					<Container w="10%"></Container>
					{links.map((link) => (
						<Link
							to={link.path}
							key={link.name}
							style={{ flex: "1 0 auto", textAlign: "center", padding: "3px 0", textDecoration: "none" }}
						>
							<Text>{link.name}</Text>
						</Link>
					))}
					<Container w="auto">dark/light</Container>
				</Flex>
			</Box>
		</>
	);
}

export default Header;

import { Box, Container, Flex, Image, Notification, Text } from "@mantine/core";
import Banner from "/banner.png";
import { Link } from "react-router-dom";
import { IconUserFilled } from "@tabler/icons-react";
import { useSessionStorage } from "@mantine/hooks";

const links = [
	{ name: "OTSI REISE", path: "/" },
	{ name: "TEATED", path: "/notifications" },
	{ name: "TSOONIINFO", path: "/zone-info" },
	{ name: "PERIOODIPILET", path: "/" },
	{ name: "KONTAKT", path: "/" },
];

function Header() {
	const [userId] = useSessionStorage({ key: "id", defaultValue: null });

	return (
		<>
			<Box mt="20px" w={{ base: "100%", md: "60%" }} mx="auto" style={{ border: "1px solid black" }}>
				<Image src={Banner} style={{ borderBottom: "1px solid black" }} />
				<Flex justify="center">
					<Container></Container>
					{links.map((link) => (
						<Link
							to={link.path}
							key={link.name}
							style={{ flex: "1 0 auto", textAlign: "center", padding: "3px 0", textDecoration: "none" }}
						>
							<Text>{link.name}</Text>
						</Link>
					))}
					<Flex align="center">
						<Link to="/log-in" style={{ textDecoration: "none" }}>
							{userId === "" && <Text size="sm">Logi sisse</Text>}
							{userId !== "" && <Text>{userId}</Text>}
						</Link>
						<IconUserFilled />
					</Flex>
				</Flex>
			</Box>
		</>
	);
}

export default Header;

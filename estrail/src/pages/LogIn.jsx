import { Box, Button, Center, Container, Input, Notification, Text } from "@mantine/core";
import { useSessionStorage } from "@mantine/hooks";
import { useRef, useState } from "react";

function LogIn() {
	const idCodeRef = useRef();
	const phoneNrRef = useRef();
	const [notificationMessage, setNotificationMessage] = useState("");
	const [userId, setUserId] = useSessionStorage({ key: "id", defaultValue: "" });

	const login = () => {
		if (idCodeRef.current.value.length !== 11) {
			setNotificationMessage("Sisesta korrektne isikukood!");
		} else if (
			isNaN(Number(phoneNrRef.current.value)) ||
			phoneNrRef.current.value.length < 8 ||
			phoneNrRef.current.value.length > 9
		) {
			setNotificationMessage("Sisesta korrektne telefoninumber!");
		} else {
			setUserId(idCodeRef.current.value);
			setNotificationMessage("");
		}
	};

	if (userId !== "")
		return (
			<Box w={{ base: "100%", md: "50%" }} pb="20px" ta="center" mx="auto">
				<Text>Oled sisse loginud kui {userId}</Text>
				<Button onClick={() => setUserId("")} mt="20px">
					Logi välja
				</Button>
			</Box>
		);

	return (
		<>
			<Container w={{ base: "100%", md: "50%" }} pb="20px">
				<Center>
					<Input.Wrapper description="Sisesta isikukood" mx="auto" size="md" mb="20px">
						<Input placeholder="Isikukood" ref={idCodeRef} size="md" />
					</Input.Wrapper>
				</Center>
				<Center>
					<Input.Wrapper description="Sisesta telefoninumber" mx="auto" size="md" mb="20px">
						<Input placeholder="Telefoninumber" ref={phoneNrRef} size="md" />
					</Input.Wrapper>
				</Center>
				<Center>
					<Button onClick={login}>Logi sisse</Button>
				</Center>
				{notificationMessage != "" && (
					<Notification mt="10px" title="Viga!" onClose={() => setNotificationMessage("")}>
						{notificationMessage}
					</Notification>
				)}
			</Container>
		</>
	);
}

export default LogIn;

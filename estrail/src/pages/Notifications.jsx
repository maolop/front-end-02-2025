import { Notification } from "@mantine/core";
import React from "react";

function Notifications() {
	return (
		<>
			<Box>
				<Notification withCloseButton={false} title="">
					Tere
				</Notification>
			</Box>
		</>
	);
}

export default Notifications;

import { Box, Center, Container, Table, Tabs } from "@mantine/core";
import stations from "../data/stations.json";

function ZoneInfo() {
	return (
		<Box px="auto">
			<Tabs defaultValue="valga">
				<Tabs.List justify="center">
					<Tabs.Tab value="valga">Valga suund</Tabs.Tab>
					<Tabs.Tab value="rapla">Rapla suund</Tabs.Tab>
					<Tabs.Tab value="paldiski">Paldiski suund</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel value="valga">
					<Table ta="center">
						<Table.Thead>
							<Table.Tr>
								<Table.Th ta="center">Peatuse nr</Table.Th>
								<Table.Th ta="center">Peatuse nimi</Table.Th>
								<Table.Th ta="center">Peatuse tsoon</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td>1</Table.Td>
								<Table.Td>Tallinn</Table.Td>
								<Table.Td>1</Table.Td>
							</Table.Tr>
							{stations
								.filter((station) => station.direction === "Valga")
								.map((station) => (
									<Table.Tr>
										<Table.Td>{station.nr}</Table.Td>
										<Table.Td>{station.name}</Table.Td>
										<Table.Td>{station.zone}</Table.Td>
									</Table.Tr>
								))}
						</Table.Tbody>
					</Table>
				</Tabs.Panel>

				<Tabs.Panel mx="auto" value="rapla">
					<Table ta="center">
						<Table.Thead>
							<Table.Tr>
								<Table.Th ta="center">Peatuse nr</Table.Th>
								<Table.Th ta="center">Peatuse nimi</Table.Th>
								<Table.Th ta="center">Peatuse tsoon</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td>1</Table.Td>
								<Table.Td>Tallinn</Table.Td>
								<Table.Td>1</Table.Td>
							</Table.Tr>
							{stations
								.filter((station) => station.direction === "Rapla")
								.map((station) => (
									<Table.Tr>
										<Table.Td>{station.nr}</Table.Td>
										<Table.Td>{station.name}</Table.Td>
										<Table.Td>{station.zone}</Table.Td>
									</Table.Tr>
								))}
						</Table.Tbody>
					</Table>
				</Tabs.Panel>

				<Tabs.Panel mx="auto" value="paldiski">
					<Table ta="center">
						<Table.Thead>
							<Table.Tr>
								<Table.Th ta="center">Peatuse nr</Table.Th>
								<Table.Th ta="center">Peatuse nimi</Table.Th>
								<Table.Th ta="center">Peatuse tsoon</Table.Th>
							</Table.Tr>
						</Table.Thead>
						<Table.Tbody>
							<Table.Tr>
								<Table.Td>1</Table.Td>
								<Table.Td>Tallinn</Table.Td>
								<Table.Td>1</Table.Td>
							</Table.Tr>
							{stations
								.filter((station) => station.direction === "Paldiski")
								.map((station) => (
									<Table.Tr>
										<Table.Td>{station.nr}</Table.Td>
										<Table.Td>{station.name}</Table.Td>
										<Table.Td>{station.zone}</Table.Td>
									</Table.Tr>
								))}
						</Table.Tbody>
					</Table>{" "}
				</Tabs.Panel>
			</Tabs>
		</Box>
	);
}

export default ZoneInfo;

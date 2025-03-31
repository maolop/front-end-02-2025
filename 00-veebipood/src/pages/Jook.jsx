import joogidJson from "../data/joogid.json";
import { Link } from "react-router-dom";

function Jook() {
	return (
		<>
			<table>
				<tr>
					<th>Nimi</th>
					<th>Tüüp</th>
					<th>Alk Sisaldus</th>
					<th>Pudeli suurus</th>
					<th>Hind</th>
				</tr>
				{joogidJson.map((jook, indeks) => (
					<tr key={jook.name}>
						<td>
							<Link to={"/jook/" + jook.name}>{jook.name}</Link>
						</td>
						<td>{jook.type}</td>
						<td>{jook.alcohol_content}%</td>
						<td>{jook.bottle_size}cl</td>
						<td>{jook.price}€</td>
					</tr>
				))}
			</table>
		</>
	);
}

export default Jook;

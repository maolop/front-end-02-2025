import joogidJson from "../../data/joogid.json";
import { useParams } from "react-router-dom";

function YksJook() {
	const { index } = useParams();
	const jook = joogidJson.find((i) => i.name === index);

	if (jook === undefined) return <div>Jooki ei leitud</div>;

	return (
		<table>
			<tr>
				<td style={{ "text-align": "left", padding: "10px 20px" }}>
					<div>Name: {jook.name}</div>
					<div>Type: {jook.type}</div>
					<div>Alcohol content: {jook.alcohol_content}%</div>
					<div>Bottle size: {jook.bottle_size}cl</div>
					<div>Price: {jook.price}€</div>
				</td>
				<td style={{ "text-align": "left", padding: "10px 20px" }}>
					{jook.type === "wine" && (
						<img
							className="drink"
							src="https://www.perfectcellar.com/cdn/shop/articles/Fine_Wine_and_Regular_Wine.jpg?v=1643119025"
						/>
					)}
					{jook.type === "beer" && (
						<img
							className="drink"
							src="https://www.diybeer.com/media/wysiwyg/Beer-Glasses/Steam_Beer_700x700px.png"
						/>
					)}
					{(jook.type === "whiskey" || jook.type === "rum") && (
						<img
							className="drink"
							src="https://media.post.rvohealth.io/wp-content/uploads/2020/01/whiskey-glass-bourbon-liquor-1200x628-facebook.jpg"
						/>
					)}
					{(jook.type === "vodka" ||
						jook.type === "tequila" ||
						jook.type === "gin") && (
						<img
							className="drink"
							src="https://thumbs.dreamstime.com/b/vodka-shot-glass-fresh-lime-isolated-white-background-39110358.jpg"
						/>
					)}
				</td>
			</tr>
		</table>
	);
}

export default YksJook;

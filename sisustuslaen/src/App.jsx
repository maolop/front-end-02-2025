import { useState } from "react";
import "./App.css";

function App() {
	const [products, setProducts] = useState([
		{ name: "Diivan", price: 500 },
		{ name: "Lamp", price: 85 },
	]);

	const editName = (index, newName) => {
		products[index].name = newName;
		setProducts(products.slice());
	};

	const editPrice = (index, newPrice) => {
		products[index].price = Number(newPrice);
		setProducts(products.slice());
	};

	const findTotalSum = () => {
		let total = 0;
		products.forEach((product) => (total += product.price));
		return total;
	};

	const deleteProduct = () => {
		products.pop();
		setProducts(products.slice());
	};

	return (
		<>
			<div className="intro-box">
				<div>
					<b>Kas sinu diivan on oma aja ära elanud?</b>
				</div>
				<br />
				<div>
					Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti uuest sisekujundusest, aga
					kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna.
				</div>
			</div>

			<div className="products-box">
				<h2>Koosta soovinimekiri ja vaata oma uue sisustuse kuumakset</h2>
				<div className="products-list">
					<table>
						<tbody>
							<tr>
								<td>Toode</td>
								<td>Hind</td>
							</tr>
							{products.map((product, index) => (
								<tr key={index}>
									<td>
										<input type="text" value={product.name} onChange={(e) => editName(index, e.target.value)} />
									</td>
									<td>
										<input type="number" value={product.price} onChange={(e) => editPrice(index, e.target.value)} />
									</td>
								</tr>
							))}
							<tr>
								<td className="click-me" onClick={() => setProducts(products.concat({ name: "", price: 0 }))}>
									Lisa toode
								</td>
								<td className="click-me" onClick={deleteProduct}>
									Kustuta
								</td>
							</tr>
						</tbody>
					</table>
					<div>
						<div className="total-price">{findTotalSum()} €</div>
						<button>Taotle sisustuslaenu</button>
						<div className="click-me">Tutvu tingimustega</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

import { useState } from "react";

export default function TavaKalkulaator() {
	const [number, setNumber] = useState(0);
	const [operaator, setOperaator] = useState("*");
	return (
		<>
			<div>
				<span>
					{number} {operaator} 2.45 ={" "}
				</span>
				{operaator === "/" && <span>{(number / 2.45).toFixed(2)}</span>}
				{operaator === "*" && <span>{(number * 2.45).toFixed(2)}</span>}
				{operaator === "-" && <span>{(number - 2.45).toFixed(2)}</span>}
				{operaator === "+" && <span>{(number + 2.45).toFixed(2)}</span>}
			</div>

			<br />

			<button onClick={() => setNumber(7)}>7</button>
			<button onClick={() => setNumber(8)}>8</button>
			<button onClick={() => setNumber(9)}>9</button>
			<button onClick={() => setOperaator("/")}>/</button>
			<br />
			<button onClick={() => setNumber(4)}>4</button>
			<button onClick={() => setNumber(5)}>5</button>
			<button onClick={() => setNumber(6)}>6</button>
			<button onClick={() => setOperaator("*")}>*</button>
			<br />
			<button onClick={() => setNumber(1)}>1</button>
			<button onClick={() => setNumber(2)}>2</button>
			<button onClick={() => setNumber(3)}>3</button>
			<button onClick={() => setOperaator("-")}>-</button>
			<br />
			<button onClick={() => setNumber(0)}>0</button>
			<button onClick={() => setNumber(".")}>.</button>
			<button onClick={() => setOperaator("+")}>+</button>
			<button>=</button>
			<br />
		</>
	);
}

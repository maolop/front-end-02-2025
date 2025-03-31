import JoogidJSON from "../data/joogid.json";
import { useRef, useState } from "react";

function Lisa() {
	const lisaJookRef = useRef();
	const [jookLisatud, setJookLisatud] = useState("");

	const lisaJook = () => {
		JoogidJSON.push(lisaJookRef.current.value);
		setJookLisatud(`${lisaJookRef.current.value} lisatud`);
		lisaJookRef.current.value = "";
	};

	return (
		<>
			<h1>Lisa</h1>
			<label>Lisa jook: </label>
			<input ref={lisaJookRef} type="text" />
			<button onClick={lisaJook}>OK</button>
			{jookLisatud !== "" && <div>{jookLisatud}</div>}
		</>
	);
}

export default Lisa;

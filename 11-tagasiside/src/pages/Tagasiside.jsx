import { useRef, useState } from "react";

function Tagasiside() {
	const [valikud, setValikud] = useState([
		"Hea",
		"Huvitav",
		"Teistsugune",
		"Põnev",
	]);
	const tagasideRef = useRef();

	return (
		<>
			{valikud.map((i) => (
				<div key={i}>
					{i}
					<button onClick={() => setValikud(valikud.filter((j) => j !== i))}>
						x
					</button>
				</div>
			))}

			<br />
			<span>Lisa tagaside: </span>
			<input type="text" ref={tagasideRef} />
			<button
				onClick={() => setValikud(valikud.concat(tagasideRef.current.value))}
			>
				Sisesta
			</button>
		</>
	);
}

export default Tagasiside;

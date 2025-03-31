import { useState } from "react";

function Sõnad() {
	const [sõnad, setSõnad] = useState([
		"spray",
		"elite",
		"exuberant",
		"destruction",
		"present",
	]);

	return (
		<>
			{sõnad.map((i) => (
				<div>
					<span>{i}</span>
					<span onClick={() => setSõnad(sõnad.filter((j) => j !== i))}>
						{" "}
						[x]
					</span>
				</div>
			))}

			{sõnad.length > 0 && <div>Kuvan {sõnad.length} sõna.</div>}
			{sõnad.length === 0 && <div>Sõnu ei ole enam!</div>}
		</>
	);
}

export default Sõnad;

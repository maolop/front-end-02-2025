import { useState } from "react";

function Tooted() {
	const esialgsedTooted = [
		"Coca-Cola",
		"Fanta",
		"Sprite",
		"Vichy",
		"Red Bull",
		"Aura",
		"Monster",
		"Starter",
		"Battery",
		"Vitautas",
	];
	const [tooted, setTooted] = useState(esialgsedTooted);

	const sorteeriAZ = () => {
		const sorteeritudTooted = tooted.slice().sort((a, b) => a.localeCompare(b));
		setTooted(sorteeritudTooted);
	};

	const sorteeriZA = () => {
		const sorteeritudTooted = tooted.slice().sort((a, b) => b.localeCompare(a));
		setTooted(sorteeritudTooted);
	};

	const sorteeriKasvavalt = () => {
		const sorteeritudTooted = tooted
			.slice()
			.sort((a, b) => a.length - b.length);
		setTooted(sorteeritudTooted);
	};

	const sorteeriKahanevalt = () => {
		const sorteeritudTooted = tooted
			.slice()
			.sort((a, b) => b.length - a.length);
		setTooted(sorteeritudTooted);
	};

	const sorteeriTeineTahtAZ = () => {
		const sorteeritudTooted = tooted
			.slice()
			.sort((a, b) => a[1].localeCompare(b[1]));
		setTooted(sorteeritudTooted);
	};

	const filtreeriKuni6tahelised = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.length <= 6);
		setTooted(filtreeritudTooted);
	};

	const filtreeri6tahelised = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.length === 6);
		setTooted(filtreeritudTooted);
	};

	const filtreeriLopebA = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.endsWith("a"));
		setTooted(filtreeritudTooted);
	};

	const filtreeriLopebY = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.endsWith("y"));
		setTooted(filtreeritudTooted);
	};

	const filtreeriPaarisarvulised = () => {
		const filtreeritudTooted = tooted.slice().filter((a) => a.length % 2 === 0);
		setTooted(filtreeritudTooted);
	};

	return (
		<>
			<button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriZA}>Sorteeri Z-A</button>
			<button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
			<button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
			<button onClick={sorteeriTeineTahtAZ}>Sorteeri A-Z (teine täht)</button>
			<br />
			<button onClick={filtreeriKuni6tahelised}>Kuni 6-tähelised</button>
			<button onClick={filtreeri6tahelised}>Täpselt 6-tähelised</button>
			<button onClick={filtreeriLopebA}>a-ga lõppevad</button>
			<button onClick={filtreeriLopebY}>y-ga lõppevad</button>
			<button onClick={filtreeriPaarisarvulised}>paarisarvulised</button>

			{tooted.map((toode) => (
				<div key={toode}>{toode}</div>
			))}
			<br />
			<div>Näitan {tooted.length} toodet.</div>
			<button onClick={() => setTooted(esialgsedTooted)}>Reset</button>
		</>
	);
}

export default Tooted;

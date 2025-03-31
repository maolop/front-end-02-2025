import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<div>
			<Link to="/">
				<img
					className="pilt"
					src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
					alt=""
				/>
			</Link>
			<br />
			<Link to="/ostukorv">
				<button>Ostukorvi</button>
			</Link>
			<Link to="/jook">
				<button>Jook</button>
			</Link>

			<Link to="/seaded">
				<button>Seaded</button>
			</Link>

			<Link to="/lisa-toode">
				<button>Lisa toode</button>
			</Link>

			<Link to="/osta-kinkekaart">
				<button>Kinkekaart</button>
			</Link>

			<Link to="/kalkulaator">
				<button>Kalkulaator</button>
			</Link>

			<Link to="/arrays-home">
				<button>Arrays</button>
			</Link>

			<Link to="/halda-home">
				<button>Halda Home</button>
			</Link>

			<Link to="/logi-sisse">
				<button>Logi sisse</button>
			</Link>

			<Link to="/registreeru">
				<button>Registreeru</button>
			</Link>
		</div>
	);
}

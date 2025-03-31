import { Link } from "react-router-dom";

function HaldaHome() {
	return (
		<>
			<Link to="/halda-autod">
				<button>Halda Autod</button>
			</Link>
			<Link to="/halda-esindused">
				<button>Halda Esindused</button>
			</Link>
			<Link to="/halda-hinnad">
				<button>Halda Hinnad</button>
			</Link>
			<Link to="/halda-tootajad">
				<button>Halda Töötajad</button>
			</Link>
			<Link to="/halda-tooted">
				<button>Halda Tooted</button>
			</Link>
			<Link to="/halda-kasutajad">
				<button>Halda Kasutajad</button>
			</Link>
		</>
	);
}

export default HaldaHome;

import { Link } from "react-router-dom";

function NavigationBar() {
	return (
		<>
			<Link to="/">
				<button>Avaleht</button>
			</Link>
			<Link to="/admin">
				<button>Admin home</button>
			</Link>
			<Link to="/cart">
				<button>Ostukorv</button>
			</Link>
		</>
	);
}

export default NavigationBar;

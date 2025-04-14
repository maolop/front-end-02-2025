import { Link } from "react-router-dom";

function AdminHome() {
	return (
		<>
			<h1>Admin Home</h1>
			<Link to="./add-product">
				<button>Lisa toode</button>
			</Link>
			<Link to="./maintain-products">
				<button>Halda tooteid</button>
			</Link>
			<Link to="./maintain-categories">
				<button>Halda kategooriaid</button>
			</Link>
		</>
	);
}

export default AdminHome;

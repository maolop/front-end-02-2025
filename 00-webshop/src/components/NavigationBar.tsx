import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import i18n from "../i18n";
import { useContext } from "react";
import { CartSumContext } from "../context/CartSumContext";
import { AuthContext } from "../context/AuthContext";

function NavigationBar() {
	const { cartSum } = useContext(CartSumContext);
	const { loggedIn, loggedInFalse } = useContext(AuthContext);
	const navigate = useNavigate();
	const changeLang = (lang: string) => {
		localStorage.setItem("language", lang);
		i18n.changeLanguage(lang);
	};

	const logout = () => {
		loggedInFalse();
		sessionStorage.removeItem("token");
		navigate("/");
	};

	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Webshop
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						{loggedIn && (
							<Nav.Link as={Link} to="/admin">
								Admin
							</Nav.Link>
						)}
						<Nav.Link as={Link} to="/cart">
							Cart
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact us
						</Nav.Link>
						<Nav.Link as={Link} to="/shops">
							Shops
						</Nav.Link>
					</Nav>
					<Nav>
						<span>{cartSum.toFixed(2)} €</span>
						<img className="icon" src="uk.png" onClick={() => changeLang("en")} />
						<img className="icon" src="estonia.png" onClick={() => changeLang("et")} />
						{!loggedIn && (
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
						)}
						{!loggedIn && (
							<Nav.Link as={Link} to="/signup">
								Sign Up
							</Nav.Link>
						)}
						{loggedIn && <button onClick={logout}>Logout</button>}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;

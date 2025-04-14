import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavigationBar() {
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Webshop
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/admin">
							Admin
						</Nav.Link>
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
						<img className="icon" src="uk.png" />
						<img className="icon" src="estonia.png" />
						<Nav.Link as={Link} to="/login">
							Login
						</Nav.Link>
						<Nav.Link as={Link} to="/signup">
							Sign Up
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;

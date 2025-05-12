import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<>
			<div className="header-container">
				<img className="header-img" src="header.jpg" alt="" />
				<div className="header-text">
					<Link to="/">
						<h1 className="header-main">Autolab</h1>
					</Link>
					<span className="header-secondary">Kõik sinu autole</span>
				</div>
			</div>

			<div className="link-bar">
				<div className="socials">
					<i class="fa-brands fa-facebook-f fa-xl"></i>
					<i class="fa-brands fa-youtube fa-xl"></i>
					<i class="fa-brands fa-discord fa-xl"></i>
				</div>

				<div>
					<Link to="/">
						<button>UUDISED</button>
					</Link>
					<Link to="/">
						<button>OSTUABI</button>
					</Link>
					<Link to="/">
						<button>ARVUSTUSED</button>
					</Link>
					<Link to="/">
						<button>E-POOD</button>
					</Link>
					<Link to="/">
						<button>KONTAKT</button>
					</Link>
				</div>

				<div className="configs">
					<i class="fa-solid fa-moon"></i>
					<i class="fa-regular fa-sun"></i>
				</div>
			</div>
		</>
	);
}

export default NavBar;

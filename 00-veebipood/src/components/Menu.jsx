import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Menu() {
	const { t, i18n } = useTranslation();

	const muudaKeelEst = () => {
		localStorage.setItem("keel", "et");
		i18n.changeLanguage("et");
	};

	const muudaKeelEng = () => {
		localStorage.setItem("keel", "en");
		i18n.changeLanguage("en");
	};

	return (
		<div>
			<button onClick={muudaKeelEst}>et</button>
			<button onClick={muudaKeelEng}>en</button>

			<Link to="/">
				<img
					className="pilt"
					src="https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg"
					alt=""
				/>
			</Link>

			<br />

			<Link to="/ostukorv">
				<button>{t("menu.to-cart")}</button>
			</Link>

			<Link to="/jook">
				<button>{t("menu.drink")}</button>
			</Link>

			<Link to="/api-home">
				<button>API Home</button>
			</Link>

			<Link to="/kaart">
				<button>Kaart</button>
			</Link>

			<Link to="/kontakteeru">
				<button>Kontakteeru</button>
			</Link>

			<Link to="/tegevused">
				<button>Tegevused</button>
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

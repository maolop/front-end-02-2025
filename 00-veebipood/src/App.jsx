import "./App.css";
import { Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import LisaToode from "./pages/LisaToode";
import Esindused from "./pages/arrays/Esindused";
import Seaded from "./pages/Seaded";
import Kinkekaart from "./pages/Kinkekaart";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import Kalkulaator from "./pages/Kalkulaator";
import Tooted from "./pages/arrays/Tooted";
import Tootajad from "./pages/arrays/Tootajad";
import Hinnad from "./pages/arrays/Hinnad";
import Autod from "./pages/arrays/Autod";
import ArraysHome from "./pages/arrays/ArraysHome";
import Kasutajad from "./pages/arrays/Kasutajad";
import HaldaHome from "./pages/halda/HaldaHome";
import HaldaAutod from "./pages/halda/HaldaAutod";
import HaldaKasutajad from "./pages/halda/HaldaKasutajad";
import HaldaHinnad from "./pages/halda/HaldaHinnad";
import HaldaTootajad from "./pages/halda/HaldaTootajad";
import HaldaTooted from "./pages/halda/HaldaTooted";
import HaldaEsindused from "./pages/halda/HaldaEsindused";
import YksAuto from "./pages/yks/YksAuto";
import YksKasutaja from "./pages/yks/YksKasutaja";
import YksHind from "./pages/yks/YksHind";
import YksTootaja from "./pages/yks/YksTootaja";
import YksToode from "./pages/yks/YksToode";
import YksEsindus from "./pages/yks/YksEsindus";
import MuudaAuto from "./pages/muuda/MuudaAuto";
import MuudaKasutaja from "./pages/muuda/MuudaKasutaja";
import MuudaHind from "./pages/muuda/MuudaHind";
import MuudaTootaja from "./pages/muuda/MuudaTootaja";
import MuudaToode from "./pages/muuda/MuudaToode";
import MuudaEsindus from "./pages/muuda/MuudaEsindus";
import LogiSisse from "./pages/LogiSisse";
import Registreeru from "./pages/Registreeru";
import Jook from "./pages/Jook";
import YksJook from "./pages/yks/YksJook";
import Tegevused from "./pages/Tegevused";
import Kaart from "./pages/Kaart";
import { useState } from "react";
import { Kontakteeru } from "./pages/Kontakteeru";
import Autod2 from "./pages/api/Autod2";
import Raamatud1 from "./pages/api/Raamatud1";
import Raamatud2 from "./pages/api/Raamatud2";
import Riigid1 from "./pages/api/Riigid1";
import Riigid2 from "./pages/api/Riigid2";
import Sonastik from "./pages/api/Sonastik";
import Tarnija1 from "./pages/api/Tarnija1";
import Tarnija2 from "./pages/api/Tarnija2";
import Tarnija3 from "./pages/api/Tarnija3";
import Ujutused from "./pages/api/Ujutused";
import ApiHome from "./pages/api/ApiHome";
import Pakiautomaadid from "./pages/api/Pakiautomaadid";

function App() {
	const [dark, setDark] = useState(localStorage.getItem("dark") || "true");

	const muudaDark = () => {
		setDark("true");
		localStorage.setItem("dark", "true");
	};

	const muudaLight = () => {
		setDark("false");
		localStorage.setItem("dark", "false");
	};

	return (
		<div className={dark === "true" ? "dark" : "light"}>
			<Menu />

			{/* <button onClick={muudaLight}>Light</button>
			<button onClick={muudaDark}>Dark</button> */}

			<Routes>
				<Route path="/" element={<Avaleht />} />
				<Route path="/ostukorv" element={<Ostukorv />} />
				<Route path="/jook" element={<Jook />} />
				<Route path="/kaart" element={<Kaart />} />
				<Route path="/tegevused" element={<Tegevused />} />
				<Route path="/seaded" element={<Seaded />} />
				<Route path="/lisa-toode" element={<LisaToode />} />
				<Route path="/osta-kinkekaart" element={<Kinkekaart />} />
				<Route path="/kalkulaator" element={<Kalkulaator />} />
				<Route path="/logi-sisse" element={<LogiSisse />} />
				<Route path="/registreeru" element={<Registreeru />} />
				<Route path="/kontakteeru" element={<Kontakteeru />} />

				<Route path="/arrays-home" element={<ArraysHome />} />
				<Route path="/autod" element={<Autod />} />
				<Route path="/kasutajad" element={<Kasutajad />} />
				<Route path="/hinnad" element={<Hinnad />} />
				<Route path="/tootajad" element={<Tootajad />} />
				<Route path="/tooted" element={<Tooted />} />
				<Route path="/esindused" element={<Esindused />} />

				<Route path="/halda-home" element={<HaldaHome />} />
				<Route path="/halda-autod" element={<HaldaAutod />} />
				<Route path="/halda-kasutajad" element={<HaldaKasutajad />} />
				<Route path="/halda-hinnad" element={<HaldaHinnad />} />
				<Route path="/halda-tootajad" element={<HaldaTootajad />} />
				<Route path="/halda-tooted" element={<HaldaTooted />} />
				<Route path="/halda-esindused" element={<HaldaEsindused />} />

				<Route path="/auto/:index" element={<YksAuto />} />
				<Route path="/jook/:index" element={<YksJook />} />
				<Route path="/kasutajad/:email" element={<YksKasutaja />} />
				<Route path="/hind/:index" element={<YksHind />} />
				<Route path="/tootajad/:nimi" element={<YksTootaja />} />
				<Route path="/tooted/:index" element={<YksToode />} />
				<Route path="/esindus/:jrknr" element={<YksEsindus />} />

				<Route path="/muuda-auto/:index" element={<MuudaAuto />} />
				<Route path="/muuda-kasutaja/:email" element={<MuudaKasutaja />} />
				<Route path="/muuda-hind/:index" element={<MuudaHind />} />
				<Route path="/muuda-tootaja/:nimi" element={<MuudaTootaja />} />
				<Route path="/muuda-toode/:index" element={<MuudaToode />} />
				<Route path="/muuda-esindus/:nimi" element={<MuudaEsindus />} />

				<Route path="api-home" element={<ApiHome />} />
				<Route path="/autod2" element={<Autod2 />} />
				<Route path="pakiautomaadid" element={<Pakiautomaadid />} />
				<Route path="/raamatud1" element={<Raamatud1 />} />
				<Route path="/raamatud2" element={<Raamatud2 />} />
				<Route path="/riigid1" element={<Riigid1 />} />
				<Route path="/riigid2" element={<Riigid2 />} />
				<Route path="/sonastik" element={<Sonastik />} />
				<Route path="/tarnija1" element={<Tarnija1 />} />
				<Route path="/tarnija2" element={<Tarnija2 />} />
				<Route path="/tarnija3" element={<Tarnija3 />} />
				<Route path="/ujutused" element={<Ujutused />} />

				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;

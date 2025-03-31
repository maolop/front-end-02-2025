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

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ostukorv" element={<Ostukorv />} />
        <Route path="/seaded" element={<Seaded />} />
        <Route path="/lisa-toode" element={<LisaToode />} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart />} />
        <Route path="/kalkulaator" element={<Kalkulaator />} />
        <Route path="/logi-sisse" element={<LogiSisse />} />
        <Route path="/registreeru" element={<Registreeru />} />

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
        <Route path="/kasutaja" element={<YksKasutaja />} />
        <Route path="/hind/:index" element={<YksHind />} />
        <Route path="/tootaja" element={<YksTootaja />} />
        <Route path="/toode" element={<YksToode />} />
        <Route path="/esindus/:jrknr" element={<YksEsindus />} />

        <Route path="/muuda-auto/:index" element={<MuudaAuto />} />
        <Route path="/muuda-kasutaja" element={<MuudaKasutaja />} />
        <Route path="/muuda-hind/:index" element={<MuudaHind />} />
        <Route path="/muuda-tootaja" element={<MuudaTootaja />} />
        <Route path="/muuda-toode" element={<MuudaToode />} />
        <Route path="/muuda-esindus" element={<MuudaEsindus />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

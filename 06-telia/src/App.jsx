import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Avaleht from "./pages/Avaleht";
import Ilmumine from "./pages/Ilmumine";
import Kujundus from "./pages/Kujundus";
import Muutmine from "./pages/Muutmine";
import Hind from "./pages/Hind";
import Telefon from "./pages/Telefon";

function App() {
  return (
    <>
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/ilmumine">
        <button>Ilmumine</button>
      </Link>
      <Link to="/kujundus">
        <button>Kujundus</button>
      </Link>
      <Link to="/muutmine">
        <button>Muutmine</button>
      </Link>
      <Link to="/hind">
        <button>Hind</button>
      </Link>
      <Link to="/telefon">
        <button>Telefon</button>
      </Link>

      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/ilmumine" element={<Ilmumine />} />
        <Route path="/kujundus" element={<Kujundus />} />
        <Route path="/muutmine" element={<Muutmine />} />
        <Route path="/hind" element={<Hind />} />
        <Route path="/telefon" element={<Telefon />} />
      </Routes>
    </>
  );
}

export default App;

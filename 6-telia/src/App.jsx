import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import Ilmumine from "./pages/Ilmumine"
import Kujundus from "./pages/Kujundus"
import Muutmine from "./pages/Muutmine"

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

      <Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/ilmumine" element={<Ilmumine/>}/>
        <Route path="/kujundus" element={<Kujundus/>}/>
        <Route path="/muutmine" element={<Muutmine/>}/>
      </Routes>

    </>
  )
}

export default App

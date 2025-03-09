import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import LisaTegelane from './pages/LisaTegelane'
import ValitudTegelane from './pages/ValitudTegelane'

function App() {
  return (
    <>

      <Link to='/'>
        <button>Avaleht</button>
      </Link>
      <Link to='lisategelane'>
        <button>Lisa tegelane</button>
      </Link>
      <Link to='valitudtegelane'>
        <button>Valitud tegelane</button>
      </Link>

      <Routes>
        <Route path='/' element={ <Avaleht/> }/>
        <Route path='/lisategelane' element={ <LisaTegelane/> }/>
        <Route path='/valitudtegelane' element={ <ValitudTegelane/> }/>
      </Routes>
      
    </>
  )
}

export default App

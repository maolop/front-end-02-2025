import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Esindused from './pages/Esindused'
import Seaded from './pages/Seaded'
import Kinkekaart from './pages/Kinkekaart'
import Menu from './components/Menu'
import NotFound from './pages/NotFound'
import Kalkulaator from './pages/Kalkulaator'

function App() {


  return (
    <>
      <Menu />
      


        <Routes>
          <Route path="/" element={ <Avaleht /> } />
          <Route path="/ostukorv" element={ <Ostukorv />} />
          <Route path="/seaded" element={ <Seaded />} />
          <Route path="/lisa-toode" element={ <LisaToode />} />
          <Route path="/esindused" element={ <Esindused />} />
          <Route path="/osta-kinkekaart" element={ <Kinkekaart/> }/>
          <Route path="/kalkulaator" element={ <Kalkulaator/> }/>
          <Route path="/*" element={ <NotFound/> }/>
        </Routes>
    </>
  )
}

export default App

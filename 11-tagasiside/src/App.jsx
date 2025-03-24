import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'
import './App.css'

function App() {

  return (
    <>
      <Link to='/'>
        <button>Avaleht</button>
      </Link>
      <Link to='/tagasiside'>
        <button>Tagasiside</button>
      </Link>
      <Link to='/tagasiside-andjad'>
        <button>Tagasiside Andjad</button>
      </Link>


      <Routes>
        <Route path='/' element={<Avaleht/>}/>
        <Route path='/tagasiside' element={<Tagasiside/>}/>
        <Route path='/tagasiside-andjad' element={<TagasisideAndjad/>}/>
      </Routes>
      
    </>
  )
}

export default App

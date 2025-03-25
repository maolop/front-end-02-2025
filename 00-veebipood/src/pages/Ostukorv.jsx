import { useState } from "react"
import { Link } from "react-router-dom"
import ostukorvJSON from "../data/ostukorv.json"


function Ostukorv() {
  const [tooted, setTooted] = useState(ostukorvJSON.slice())

  const kustuta = (index) => {
    tooted.splice(index, 1)
    setTooted(tooted.slice())
  }

  const hinnadKokku = () => {
    let kokku = 0
    tooted.forEach(i => kokku += i.hind)
    return kokku
  }

  return (
    <>
      {tooted.length > 0 && <button onClick={() => setTooted([])}>Tühjenda</button>}

      {tooted.map((toode, index) => <div key={toode.nimi}>
        {toode.nimi}: {toode.hind}
        <button onClick={() => kustuta(index)}>x</button>
      </div>)}

      {tooted.length === 0 && <div>Ostukorv on tühi. <Link to="/">Mine tooteid lisama</Link></div>}
      {tooted.length > 0 && <div>Ostukorvis on {tooted.length} toodet</div>}
      {tooted.length > 0 && <div>Summa kokku: {hinnadKokku()}€.</div>}

    </>
  )
}

export default Ostukorv

import { useState } from "react"
import { Link } from "react-router-dom"

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"])

  const kustuta = (index) => {
    tooted.splice(index, 1)
    setTooted(tooted.slice())
  }

  return (
    <>
      {tooted.length > 0 && <button onClick={() => setTooted([])}>Tühjenda</button>}

      {tooted.map((toode, index) => <div key={toode}>
        {toode}
        <button onClick={() => kustuta(index)}>x</button>
      </div>)}

      {tooted.length === 0 && <div>Ostukorv on tühi. <Link to="/">Mine tooteid lisama</Link></div>}
    </>
  )
}

export default Ostukorv

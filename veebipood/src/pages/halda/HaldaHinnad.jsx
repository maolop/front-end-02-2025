import { useState, useRef } from "react"
import hinnadFailist from "../../data/hinnad.json"


function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice())
  const hindRef = useRef()
  
  const kustuta = (index) => {
    hinnadFailist.splice(index, 1)
    setHinnad(hinnadFailist.slice())
  }

  const sisesta = () => {
    hinnadFailist.push(Number(hindRef.current.value))
    setHinnad(hinnadFailist.slice())
    hindRef.current.value = ""
  }

  const arvutaKokku = () => {
    let summa = 0
    hinnad.forEach(hind => summa += hind)
    return summa
  }

  return (
    <>
      <label>Uus hind:</label>
      <input ref={hindRef} type="number"/>
      <button onClick={sisesta}>Sisesta</button>

      <div>{hinnad.length} hinda</div>

      <table>
        <thead>
          <tr>
            <th>Järjekorranr</th>
            <th>Index</th>
            <th>Hind</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((auto, index) =>
            <tr key={auto}>
              <td>{index + 1}</td>
              <td>{index}</td>
              <td>{auto}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
      <div>Hinnad kokku: {arvutaKokku()}€</div>

    </>
  )
}

export default HaldaHinnad

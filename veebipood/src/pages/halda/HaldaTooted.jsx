import { useState } from "react"

function HaldaTooted() {
  const esialgsedTooted = ["Coca-Cola", "Fanta", "Sprite", "Vichy", "Red Bull", "Aura", "Monster", "Starter", "Battery", "Vitautas"]
  const [tooted, setTooted] = useState(esialgsedTooted)

  const kustuta = (index) => {
    const uuedTooted = tooted.slice()
    uuedTooted.splice(index, 1)
    setTooted(uuedTooted)
  }

  return (
    <>
      <table>
        <tr>
          <th>Järjekorranr</th>
          <th>Index</th>
          <th>Toote nimi</th>
          <th>Kustuta</th>
        </tr>

        {tooted.map((toode, index) => 
        <tr key={toode}>
          <td>{index + 1}</td>
          <td>{index}</td>
          <td>{toode}</td>
          <td><button onClick={() => kustuta(index)}>x</button></td>
        </tr>)}
        
      </table>
      <div>Näitan {tooted.length} toodet.</div>
    </>
  )
}

export default HaldaTooted
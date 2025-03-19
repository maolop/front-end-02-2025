import { useRef, useState } from "react"
import autodFailist from "../../data/autod.json"

function HaldaAutod() {
    const [autod, setAutod] = useState(autodFailist)
    const nimiRef = useRef()

    const kustuta = (index) => {
      autodFailist.splice(index, 1)
      setAutod(autodFailist.slice())
    }

    const sisesta = () => {
      autodFailist.push(nimiRef.current.value)
      setAutod(autodFailist.slice())
    }

    const arvutaTahemargid = () => {
      let kokku = 0
      autod.forEach(auto => kokku += auto.length)
      return kokku
    }

  return (
    <>
      <label>Auto nimi:</label>
      <input ref={nimiRef} type="text"/>
      <button onClick={sisesta}>Sisesta</button>

      <div>Kokku {autod.length} auto(t)</div>
      <table>
        <thead>
          <tr>
            <th>Järjekorranr</th>
            <th>Index</th>
            <th>Auto nimi</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {autod.map((auto, index) =>
            <tr key={auto}>
              <td>{index + 1}</td>
              <td>{index}</td>
              <td>{auto}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
      <div>Tähemärke kokku: {arvutaTahemargid()}</div>
    </>
  )
}

export default HaldaAutod
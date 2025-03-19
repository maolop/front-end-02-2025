import { useRef, useState } from "react"
import hinnadFailist from "../../data/hinnad.json"

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice())
  const otsingRef = useRef()

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b)
    setHinnad(hinnad.slice())

    // hinnad.sort((a, b) => a - b)
    // setHinnad([...hinnad])

    // const vastus = hinnad.toSorted((a, b) => a - b)
    // setHinnad(vastus)
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b - a)
    setHinnad(hinnad.slice())
  }

  const filtreeriVaiksemad1000 = () => {
    const vastus = hinnadFailist.filter(hind => hind < 1000)
    setHinnad(vastus)
  }

  const filtreeriSuuremad500 = () => {
    const vastus = hinnadFailist.filter(hind => hind > 500)
    setHinnad(vastus)
  }

  const reset = () => {
    setHinnad(hinnadFailist.slice())
  }

  const otsi = () => {
    const vastus = hinnadFailist.filter(hind => hind.toString().includes(otsingRef.current.value))
    setHinnad(vastus)
    }
  
  return (
    <>
      <label>Otsi:</label>
      <input ref={otsingRef} onChange={otsi} type="number" />
      <br/>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriVaiksemad1000}>Jäta väiksemad kui 1000</button>
      <button onClick={filtreeriSuuremad500}>Jäta suuremad kui 500</button>
      {hinnad.map(hind => <div key={hind}>Hind: {hind}€</div>)}
      <div>Hindu kokku: {hinnad.length}</div>
      <button onClick={reset}>Võta filtrid maha</button>
    </>
  )
}

export default Hinnad

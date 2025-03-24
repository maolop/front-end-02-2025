import { useState, useRef } from "react"
import autodFailist from "../../data/autod.json"

function Autod() {
  const [autod, setAutod] = useState(autodFailist.slice())
  const otsingRef = useRef()

  const sorteeriAZ = () => {
    autodFailist.sort((a, b) => a.localeCompare(b))
    setAutod(autod.slice())
  }

  const sorteeriZA = () => {
    autodFailist.sort((a, b) => b.localeCompare(a))
    setAutod(autodFailist.slice())
  }

  const sorteeriKolmasTahtAZ = () => {
    autodFailist.sort((a, b) => a[2].localeCompare(b[2]))
    setAutod(autod.slice())
  }
  const sorteeriKasvavalt = () => {
    autod.sort((a, b) => a.length - b.length)
    setAutod(autod.slice())
  }

  const sorteeriKahanevalt = () => {
    autod.sort((a, b) => b.length - a.length)
    setAutod(autod.slice())
  }

  const sorteeriTeineO = () => {
    const vastus = autodFailist.filter(auto => auto[1] === 'o')
    setAutod(vastus)
  }

  const sorteeriSisaldabA = () => {
    const vastus = autod.filter(auto => auto.includes('a'))
    setAutod(vastus)
  }

  const sorteeriPikkus4 = () => {
    const vastus = autod.filter(auto => auto.length === 4)
    setAutod(vastus)
  }

  const sorteeriPikkus5plus = () => {
    const vastus = autod.filter(auto => auto.length >= 5)
    setAutod(vastus)
  }

  const sorteeriLopebI = () => {
    // const vastus = autod.filter(auto => auto[auto.length - 1] === 'i')
    const vastus = autod.filter(auto => auto.endsWith('i'))
    setAutod(vastus)
  }

  const reset = () => {
    setAutod(autodFailist.slice())
  }

  const otsi = () => {
    const vastus = autodFailist.filter(auto => auto.toLowerCase().includes(otsingRef.current.value.toLowerCase()))
    setAutod(vastus)
  }

  return (
    <>
      <label>Otsi:</label>
      <input ref={otsingRef} onChange={otsi} type="text" />
      <br/>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri 3. täht A-Z</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri tähemärgid kahanevalt</button>
      <br/><br/>
      <button onClick={sorteeriTeineO}>Jäta alles need, mille 2. täht on &quot;o&quot;</button>
      <button onClick={sorteeriSisaldabA}>Jäta alles need, milles on väike &quot;a&quot;</button>
      <button onClick={sorteeriPikkus4}>Jäta alles need, millel tähemärke täpselt 4</button>
      <button onClick={sorteeriPikkus5plus}>Jäta alles need, millel tähemärke vähemalt 5</button>
      <button onClick={sorteeriLopebI}>Jäta alles need, mis lõppevad &quot;i&quot; tähega</button>

      {autod.map(auto => <div key={auto}>{auto} </div>)}
      
      <br/>
      <div>Autosid {autod.length} tk</div>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Autod

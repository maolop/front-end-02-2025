import { useState } from "react"
import kasutajadFailist from "../../data/kasutajad.json"

function Kasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadFailist.slice())

  const sorteeriAZ = () => {
    const vastus = kasutajad.toSorted((a, b) => a.email.localeCompare(b.email))
    setKasutajad(vastus)
  }

  const sorteeriTahedKasv = () => {
    const vastus = kasutajad.toSorted((a, b) => a.email.length - b.email.length)
    setKasutajad(vastus)
  }

  return(
    <>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>

      {kasutajad.map(kasutaja => <div key={kasutaja.email}>{kasutaja.email}</div>)}
    </>
  )
}
export default Kasutajad
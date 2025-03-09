import { useState } from "react"

function LisaToode() {
  const [sonum, setSonum] = useState("")
  return (
    <>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input type="text" /> <br />
      <button onClick={ () => setSonum("Edukalt toode lisatud!") }>Sisesta</button>
    </>
  )
}

export default LisaToode
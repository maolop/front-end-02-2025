import { useRef, useState } from "react"

function LisaToode() {
  const [sonum, setSonum] = useState("")
  const nimiRef = useRef()

  const sisesta = () => {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimega toodet ei saa lisada")
    } else {
      setSonum("Toode edukalt lisatud")
    }
  }


  return (
    <>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button>
    </>
  )
}

export default LisaToode

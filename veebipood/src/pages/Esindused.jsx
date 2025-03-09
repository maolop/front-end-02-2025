import { useState } from "react"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn")

  return (
    <>
      <div>Hetkel aktiivne linn: {linn}</div>
      <button className={ linn === "Tallinn" ? "aktiivne-linn" : undefined } onClick={ () => setLinn("Tallinn")}>Tallinn</button>
      <button className={ linn === "Tartu" ? "aktiivne-linn" : undefined } onClick={ () => setLinn("Tartu")}>Tartu</button>
      <button className={ linn === "Pärnu" ? "aktiivne-linn" : undefined } onClick={ () => setLinn("Pärnu")}>Pärnu</button>
      <button className={ linn === "Narva" ? "aktiivne-linn" : undefined } onClick={ () => setLinn("Narva")}>Narva</button>

      {linn === "Tallinn" &&
        <>
          <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Lasnamäe</div>
          <div>Magistrali</div>
          <div>Järveotsa</div>
        </>
      }

      {linn === "Tartu" && 
        <>
          <div>Tasku</div>
          <div>Lõunakeskus</div>
        </>
      }

      {linn === "Pärnu" && <div>Port Artur</div> }
      {linn === "Narva" && <div>Fama</div> }

    </>
  )
}

export default Esindused

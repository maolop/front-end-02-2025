import { useState } from "react"
import { Link } from "react-router-dom"

import esindusedFailist from "../../data/esindused.json"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn")
  const [esindused, setEsindused] = useState(esindusedFailist.slice())

  // objektideks!
  // sorteeri A-Z
  // sorteeri Z-A
  // tähed kasvavalt
  // tähed kahanevalt
  // neljas täht A-Z
  // sorteeri sõnad arvu järgi

  // filtreeri e'ga lõppevad
  // vähemalt 7 tähelised
  // täpselt 9 tähelised
  // "is" lühendit sisaldavad
  // kellel on 4's täht "s"
  // paarisarv tähti sisaldavad

  return (
    <>
      <div>Hetkel aktiivne linn: {linn}</div>
      <button className={ linn === "Tallinn" ? "aktiivne-linn" : undefined } onClick={ () => setLinn("Tallinn")}>Tallinn</button>
      <button className={ linn === "Tartu" ? "aktiivne-linn" : undefined } onClick={ () => setLinn("Tartu")}>Tartu</button>
      <button className={ linn === "Pärnu" ? "aktiivne-linn" : undefined } onClick={ () => setLinn("Pärnu")}>Pärnu</button>
      <button className={ linn === "Narva" ? "aktiivne-linn" : undefined } onClick={ () => setLinn("Narva")}>Narva</button>

      {linn === "Tallinn" &&
        <>
          {esindused.map((esindus, index) => <div key={esindus}>
            {esindus.keskus} (+372{esindus.tel})
            <Link to={"/esindus/" + index}>
              <button>Vt esindust</button>
            </Link>
          </div>)

          }
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

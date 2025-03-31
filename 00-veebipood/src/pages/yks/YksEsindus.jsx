import { useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
  const {jrknr} = useParams()
  const leitud = esindusedFailist[jrknr]
  
  if (leitud === undefined)
    return <div>Esindust ei leitud</div>

  return (
    <>
      <div>{leitud.keskus}</div>
      <div>{leitud.tel}</div>
      <div>{leitud.aadress}</div>
    </>
  )
}

export default YksEsindus

import { useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"

function YksAuto() {
  const {index} = useParams()
  const leitud = autodFailist[index]

  return (
    <>
      <div>{leitud.nimi}</div>
      <div>{leitud.hind}</div>
    </>
  )
}

export default YksAuto

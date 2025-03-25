import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function YksHind() {
  const {index} = useParams()
  const leitud = hinnadFailist[index]
  

  return (
    <>
      <div>Arv: {leitud.arv}</div>
      <div>Lisaja: {leitud.lisaja}</div>
    </>
  )
}

export default YksHind

import { useState } from "react"

function Avaleht() {
  const [laigitud, setLaigitud] = useState(false)

  return (
    <div>
      {laigitud === true ? <img src="/laigitud.svg" alt="" /> : <img src="/mittelaigitud.svg" alt="" /> }
      <br/>
      <button onClick={ () => setLaigitud(!laigitud)}>Muuda like-i</button>
      <br/>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
  )
}

export default Avaleht

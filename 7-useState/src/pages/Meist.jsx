import { useState } from "react"

function Meist() {
  const [message, setMessage] = useState("Vali tegevus")
  return (
    <>
      <br/>
      <button onClick={() => setMessage("Saada e-mail jobs@company.com")}>Kandideeri</button>
      <button onClick={() => setMessage("Meil on igasugused töötajad, varsti tuleb info!")}>Vaata töötajaid</button>
      <button onClick={() => setMessage("Ühenduse võtmiseks mine lehele Kontakt")}>Võta ühendust</button>
      <div>{message}</div>
    </>
  )
}

export default Meist
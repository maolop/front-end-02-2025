import { useState } from "react"

function Tootajad() {
  const esialgsedTootajad = ["Aivar", "hr Kalvi-Kalle", "Pärtel", "Kerli", "Mari-Liis", "pr Ulvi", "Juhan", "Mats", "hr Raul-Jaak-Ervin", "Milvi"]
  const [tootajad, setTootajad] = useState(esialgsedTootajad)

  const sorteeriAZ = () => {
    const uuedTootajad = tootajad.slice().sort((a, b) => a.localeCompare(b))
    setTootajad(uuedTootajad)
  }

  const sorteeriZA = () => {
    const uuedTootajad = tootajad.slice().sort((a, b) => b.localeCompare(a))
    setTootajad(uuedTootajad)
  }

  const sorteeriTahedKasvavalt = () => {
    const uuedTootajad = tootajad.slice().sort((a, b) => a.length - b.length)
    setTootajad(uuedTootajad)
  }

  const sorteeriTahedKahanevalt = () => {
    const uuedTootajad = tootajad.slice().sort((a, b) => b.length - a.length)
    setTootajad(uuedTootajad)
  }

  const sorteeriNeljasAZ = () => {
    const uuedTootajad = tootajad.slice().sort((a, b) => a[3].localeCompare(b[3]))
    setTootajad(uuedTootajad)
  }

  const sorteeriNimedeArvuJargi = () => {
    const uuedTootajad = tootajad.slice().sort((a, b) => b.split("-").length - a.split("-").length)
    setTootajad(uuedTootajad)
  }

  const filtreeriLopebI = () => {
    const uuedTootajad = tootajad.slice().filter(a => a.endsWith("i"))
    setTootajad(uuedTootajad)
  }

  const filtreeriVahemaltKuueTahelised = () => {
    const uuedTootajad = tootajad.slice().filter(a => a.length >= 6)
    setTootajad(uuedTootajad)
  }

  const filtreeriViieTahelised = () => {
    const uuedTootajad = tootajad.slice().filter(a => a.length === 5)
    setTootajad(uuedTootajad)
  }

  const filtreeriSisaldabLuhendit = () => {
    const uuedTootajad = tootajad.slice().filter(a => (a.includes("hr") || a.includes("pr")))
    setTootajad(uuedTootajad)
  }

  const filtreeriNeljasTahtOnA = () => {
    const uuedTootajad = tootajad.slice().filter(a => a[3] === "a")
    setTootajad(uuedTootajad)
  }

  const filtreeriPaarisArvuline = () => {
    const uuedTootajad = tootajad.slice().filter(a => a.length % 2 === 0)
    setTootajad(uuedTootajad)
  }

  return (
    <>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriNeljasAZ}>Sorteeri 4. täht A-Z</button>
      <button onClick={sorteeriNimedeArvuJargi}>Sorteeri nimede arvu järgi</button>
      <br/>
      <button onClick={filtreeriLopebI}>I-ga lõppevad</button>
      <button onClick={filtreeriVahemaltKuueTahelised}>Vähemalt 6-tähelised</button>
      <button onClick={filtreeriViieTahelised}>Täpselt 5-tähelised</button>
      <button onClick={filtreeriSisaldabLuhendit}>Sisaldab lühendit</button>
      <button onClick={filtreeriNeljasTahtOnA}>Neljas täht on a</button>
      <button onClick={filtreeriPaarisArvuline}>Paarisarvulised</button>
      {tootajad.map(tootaja => <div key={tootaja}>{tootaja}</div>)}
      <br/>
      <div>Näitan {tootajad.length} töötajat.</div>
      <button onClick={() => setTootajad(esialgsedTootajad)}>Reset</button>
    </>
  )
}

export default Tootajad

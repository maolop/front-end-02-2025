import { useState } from "react"

function HaldaTootajad() {
  const esialgsedTootajad = ["Aivar", "hr Kalvi-Kalle", "Pärtel", "Kerli", "Mari-Liis", "pr Ulvi", "Juhan", "Mats", "hr Raul-Jaak-Ervin", "Milvi"]
  const [tootajad, setTootajad] = useState(esialgsedTootajad)

  const kustuta = (tootaja) => {
    const uuedTootajad = tootajad.slice().filter(a => a !== tootaja)
    setTootajad(uuedTootajad)
  }
  return (
    <>
      

      <table>
        <tr>
          <th>Järjekorranr</th>
          <th>Index</th>
          <th>Nimi</th>
          <th>Kustuta</th>
        </tr>
        {tootajad.map((tootaja, index) =>
        <tr key={tootaja}>
          <td>{index + 1}</td>
          <td>{index}</td>
          <td>{tootaja}</td>
          <td><button onClick={() => kustuta(tootaja)}>x</button></td>
        </tr>)}
      </table>
      <div>Näitan {tootajad.length} töötajat.</div>
    </>
  )
}

export default HaldaTootajad
// objektideks => nimi, vanus, amet
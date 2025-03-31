import tootetFailist from "../../data/tooted.json";
import { useState } from "react";

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootetFailist);

  const kustuta = (index) => {
    const uuedTooted = tooted.slice();
    uuedTooted.splice(index, 1);
    setTooted(uuedTooted);
  };

  return (
    <>
      <table>
        <tr>
          <th>Index</th>
          <th>Nimi</th>
          <th>Hind </th>
          <th>Aktiivne?</th>
          <th>Pilt</th>
          <th>Muuda</th>
          <th>Kustuta</th>
        </tr>

        {tooted.map((toode, index) => (
          <tr key={toode}>
            <td>{index}</td>
            <td>{toode.nimi}</td>
            <td>{toode.hind}</td>
            <td>{toode.aktiivne}</td>
            <td>{toode.pilt}</td>
            <td>
              <button>&gt;</button>
            </td>
            <td>
              <button onClick={() => kustuta(index)}>x</button>
            </td>
          </tr>
        ))}
      </table>
      <div>Näitan {tooted.length} toodet.</div>
    </>
  );
}

export default HaldaTooted;
// objektideks => nimi, hind, aktiivne, pilt

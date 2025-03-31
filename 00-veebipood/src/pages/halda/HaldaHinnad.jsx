import { useState, useRef } from "react";
import hinnadFailist from "../../data/hinnad.json";
import { Link } from "react-router-dom";

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();
  const lisajaRef = useRef();

  const kustuta = (index) => {
    hinnadFailist.splice(index, 1);
    setHinnad(hinnadFailist.slice());
  };

  const sisesta = () => {
    hinnadFailist.push({
      arv: Number(hindRef.current.value),
      lisaja: lisajaRef.current.value,
    });
    setHinnad(hinnadFailist.slice());
    hindRef.current.value = "";
    lisajaRef.current.value = "";
  };

  const arvutaKokku = () => {
    let summa = 0;
    hinnad.forEach((hind) => (summa += hind.arv));
    return summa;
  };

  return (
    <>
      <label>Uus hind:</label>
      <input ref={hindRef} type="number" />
      <label>Lisaja:</label>
      <input ref={lisajaRef} type="text" />
      <button onClick={sisesta}>Sisesta</button>

      <div>{hinnad.length} hinda</div>

      <table>
        <thead>
          <tr>
            <th>Järjekorranr</th>
            <th>Index</th>
            <th>Hind</th>
            <th>Lisaja</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => (
            <tr key={hind.arv}>
              <td>{index + 1}</td>
              <td>{index}</td>
              <td>{hind.arv}</td>
              <td>{hind.lisaja}</td>
              <td>
                <button onClick={() => kustuta(index)}>x</button>
              </td>
              <Link to={"/muuda-hind/" + index}>
                <td>
                  <button>Muuda hinda</button>
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Hinnad kokku: {arvutaKokku()}€</div>
    </>
  );
}

export default HaldaHinnad;

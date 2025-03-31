import { useState } from "react";
import JoogidJSON from "../data/joogid.json";

function Halda() {
  const [joogid, setJoogid] = useState(JoogidJSON);

  const kustutaJook = (index) => {
    JoogidJSON.splice(index, 1);
    setJoogid(JoogidJSON.slice());
  };

  return (
    <>
      <h1>Halda</h1>
      {joogid.map((nimi, index) => (
        <div key={nimi}>
          {nimi} <button onClick={() => kustutaJook(index)}>x</button>
        </div>
      ))}
      <br />
    </>
  );
}

export default Halda;

import { useRef, useState } from "react";
import autodFailist from "../data/autod.json";
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  const [sonum, setSonum] = useState("");
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const valikAutoRef = useRef();
  const valikToodeRef = useRef();

  const sisesta = () => {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimega ei saa lisada");
      return;
    }
    if (hindRef.current.value === "") {
      setSonum("Tühja hinnaga ei saa lisada");
      return;
    }
    if (hindRef.current.value === "") {
      setSonum("Tühja hinnaga ei saa lisada");
      return;
    }
    if (!valikAutoRef.current.checked && !valikToodeRef.current.checked) {
      setSonum("Vali auto või toode");
      return;
    }

    const uus = {
      nimi: nimiRef.current.value,
      hind: Number(hindRef.current.value),
      aktiivne: aktiivneRef.current.checked,
      pilt: piltRef.current.value,
    };

    if (valikAutoRef.current.checked) {
      setSonum("Auto lisatud");
      autodFailist.push(uus);
    } else if (valikToodeRef.current.checked) {
      setSonum("Toode lisatud");
      tootedFailist.push(uus);
    }
  };

  return (
    <>
      {sonum}
      <br />
      <label>Nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <br />
      <label>Hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <br />
      <label>Aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <br />
      <label>Auto</label>
      <input ref={valikAutoRef} type="radio" name="tyyp" />
      <label>Toode</label>
      <input ref={valikToodeRef} type="radio" name="tyyp" />
      <br />
      <button onClick={sisesta}>Sisesta</button>
    </>
  );
}

export default LisaToode;

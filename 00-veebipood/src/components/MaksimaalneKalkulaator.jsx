import { useState, useRef } from "react";

export default function MaksimaalneKalkulaator() {
  const ylalpeetavadRef = useRef();
  const sissetulekRef = useRef();
  const kohustusedRef = useRef();
  const [maxSumma, setMaxSumma] = useState(890000);
  const [vaikeSissetulek, setVaikeSissetulek] = useState(false);

  const uuendaMaxSumma = () => {
    setMaxSumma(
      (sissetulekRef.current.value - kohustusedRef.current.value) * 1000 -
        ylalpeetavadRef.current.value * 10000,
    );

    if (sissetulekRef.current.value - kohustusedRef.current.value < 700)
      setVaikeSissetulek(true);
    else setVaikeSissetulek(false);
  };

  return (
    <>
      <label>Ülalpeetavate arv</label>
      <select ref={ylalpeetavadRef} onChange={uuendaMaxSumma} defaultValue="1">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option value="3">3+</option>
      </select>
      <br />

      <label>Netosissetulek</label>
      <input
        type="number"
        ref={sissetulekRef}
        onChange={uuendaMaxSumma}
        defaultValue="1500"
      />
      <br />

      <label>Igakuised kohustused</label>
      <input
        type="number"
        ref={kohustusedRef}
        onChange={uuendaMaxSumma}
        defaultValue="600"
      />
      <br />

      {!vaikeSissetulek && <div>Maksimaalne summa: {maxSumma}</div>}
      {vaikeSissetulek && (
        <div>Netosissetulek on liiga väike või kohustused liiga suured.</div>
      )}
    </>
  );
}

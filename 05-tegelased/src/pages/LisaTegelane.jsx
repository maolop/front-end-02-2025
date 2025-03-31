import { useState } from "react";

export default function LisaTegelane() {
  const [message, setMessage] = useState("Siin saad lisada tegelase!");
  return (
    <>
      <h1>{message}</h1>
      <div>
        <span>Sisesta tegelase nimi: </span>
        <input type="text"></input>
      </div>
      <button onClick={() => setMessage("Lisatud!")}>Lisa</button>
    </>
  );
}

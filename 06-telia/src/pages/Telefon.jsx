import { useState } from "react";

function Telefon() {
  const [varv, setVarv] = useState("");

  return (
    <>
      <h1>Vali telefoni värv!</h1>

      <span onClick={() => setVarv("punane")} className="red color"></span>
      <span onClick={() => setVarv("kollane")} className="yellow color"></span>
      <span onClick={() => setVarv("sinine")} className="blue color"></span>
      <span onClick={() => setVarv("oranž")} className="orange color"></span>
      <span onClick={() => setVarv("roheline")} className="green color"></span>
      <span onClick={() => setVarv("lilla")} className="purple color"></span>

      {varv == false && <div>Palun vali värv!</div>}
      {varv != false && <div>Valisid värvi {varv}!</div>}
    </>
  );
}

export default Telefon;

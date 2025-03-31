import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Seaded() {
  const [keel, setKeel] = useState("est");
  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();

  const sisestaAadress = () => {
    if (aadressRef.current.value === "")
      toast.error("Tühja aadressi ei saa sisestada!");
    else if (aadressRef.current.value.length < 4)
      toast.error("Aadress on liiga lühike!");
    else toast.success("Aadress sisestatud: " + aadressRef.current.value);
  };

  const sisestaEmail = () => {
    if (emailRef.current.value === "")
      toast.error("Tühja e-maili ei saa sisestada!");
    else if (emailRef.current.value.includes("@") === false)
      toast.error("E-mailis puudub '@'!");
    else toast.success("E-mail sisestatud: " + emailRef.current.value);
  };

  const sisestaTelefon = () => {
    if (telefonRef.current.value === "")
      toast.error("Tühja numbrit ei saa sisestada!");
    else if (telefonRef.current.value.startsWith("+372") === false)
      toast.error("Sisesta Eesti suunakood!");
    else toast.success("Telefon sisestatud: " + telefonRef.current.value);
  };

  return (
    <>
      <label>Aadress</label>
      <input ref={aadressRef} type="text" />
      <button onClick={sisestaAadress}>Sisesta</button>

      <br />
      <br />

      <label>Email</label>
      <input ref={emailRef} type="text" />
      <button onClick={sisestaEmail}>Sisesta</button>

      <br />
      <br />

      <label>Telefon</label>
      <input ref={telefonRef} type="text" />
      <button onClick={sisestaTelefon}>Sisesta</button>

      <br />
      <br />

      <div>Hetkel aktiivne keel: {keel}</div>
      <button
        className={keel === "est" ? "aktiivne-keel" : undefined}
        onClick={() => setKeel("est")}
      >
        Eesti
      </button>
      <button
        className={keel === "eng" ? "aktiivne-keel" : undefined}
        onClick={() => setKeel("eng")}
      >
        English
      </button>
      <button
        className={keel === "rus" ? "aktiivne-keel" : undefined}
        onClick={() => setKeel("rus")}
      >
        Pycckij
      </button>
      <button
        className={keel === "esp" ? "aktiivne-keel" : undefined}
        onClick={() => setKeel("esp")}
      >
        Espanol
      </button>

      {keel === "est" && (
        <>
          <div>Leht on eesti keeles</div>
        </>
      )}

      {keel === "eng" && (
        <>
          <div>Page is in English</div>
        </>
      )}

      {keel === "rus" && (
        <>
          <div>Привет</div>
        </>
      )}

      {keel === "esp" && (
        <>
          <div>Como esta</div>
        </>
      )}

      <br />

      {keel !== "est" && (
        <>
          <div>
            <i>Languages other than Estonian are not ready</i>
          </div>
        </>
      )}

      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </>
  );
}

export default Seaded;

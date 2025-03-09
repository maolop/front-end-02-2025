import { useState } from "react";

function Seaded() {
  const [keel, setKeel] = useState("est");

  return (
    <>
      <div>Hetkel aktiivne keel: {keel}</div>
      <button className={ keel === "est" ? "aktiivne-keel" : undefined } onClick={ () => setKeel("est") }>Eesti</button>
      <button className={ keel === "eng" ? "aktiivne-keel" : undefined } onClick={ () => setKeel("eng") }>English</button>
      <button className={ keel === "rus" ? "aktiivne-keel" : undefined } onClick={ () => setKeel("rus") }>Pycckij</button>
      <button className={ keel === "esp" ? "aktiivne-keel" : undefined } onClick={ () => setKeel("esp") }>Espanol</button>

      {keel === "est" &&
        <>
          <div>Leht on eesti keeles</div>
        </>
      }

      {keel === "eng" &&
        <>
          <div>Page is in English</div>
        </>
      }

      {keel === "rus" &&
        <>
          <div>Привет</div>
        </>
      }

      {keel === "esp" &&
        <>
          <div>Como esta</div>
        </>
      }

      <br/>

      {keel !== "est" &&
        <>
          <div><i>Languages other than Estonian are not ready</i></div>
        </>
      }

    </>
  )
}

export default Seaded
import { useState } from "react"

function Ilmumine() {
  const [homeAktiivne, setHomeAktiivne] = useState(false)
  const [homePlusAktiivne, setHomePlusAktiivne] = useState(false)
  const [addictAktiivne, setAddictAktiivne] = useState(false)
  const [fanaticAktiivne, setFanaticAktiivne] = useState(false)

  function aktiveeriPakett(pakett) {
    setHomeAktiivne(false)
    setHomePlusAktiivne(false)
    setAddictAktiivne(false)
    setFanaticAktiivne(false)

    if (pakett === "home")
      setHomeAktiivne(!homeAktiivne)

    else if (pakett === "homePlus")
      setHomePlusAktiivne(!homePlusAktiivne)

    else if (pakett === "addict")
      setAddictAktiivne(!addictAktiivne)

    else if (pakett === "fanatic")
      setFanaticAktiivne(!fanaticAktiivne)
  }

  return (
    <>
        <h1>Vali pakett</h1>
        <button className={`pakett ${homeAktiivne ? "aktiivne-pakett" : ""}`} onClick={() => aktiveeriPakett("home")}>Home</button>
        <button className={`pakett ${homePlusAktiivne ? "aktiivne-pakett" : ""}`} onClick={() => aktiveeriPakett("homePlus")}>Home+</button>
        <button className={`pakett ${addictAktiivne ? "aktiivne-pakett" : ""}`} onClick={() => aktiveeriPakett("addict")}>Addict</button>
        <button className={`pakett ${fanaticAktiivne ? "aktiivne-pakett" : ""}`} onClick={() => aktiveeriPakett("fanatic")}>Fanatic</button>


        {(homeAktiivne || homePlusAktiivne || addictAktiivne || fanaticAktiivne) && <h2>Pakett sisaldab:</h2>}

        {homeAktiivne && 
          <>
            <div>Tasuta kanalid</div>
            <div>Lastekanalid</div>
          </>
        }
        
        {homePlusAktiivne && 
          <>
            <div>Tasuta kanalid</div>
            <div>Lastekanalid</div>
            <div>National Geographic</div>
            <div>HBO</div>
            <div>FOX NOW</div>
          </>
        }
        {addictAktiivne && 
          <>
          <div>Tasuta kanalid</div>
          <div>Lastekanalid</div>
          <div>National Geographic</div>
          <div>HBO</div>
          <div>FOX NOW</div>
          <div>Täiskasvanute kanalid</div>
          <div>Järelevaatamise võimalus</div>
          <div>Soodushinnaga filmilaenutus</div>
        </>
        }
        {fanaticAktiivne && 
          <>
          <div>Tasuta kanalid</div>
          <div>Lastekanalid</div>
          <div>National Geographic</div>
          <div>HBO</div>
          <div>FOX NOW</div>
          <div>Täiskasvanute kanalid</div>
          <div>Järelevaatamise võimalus</div>
          <div>Tasuta filmilaenutus</div>
          <div>Igakuine ajakirja &#34;Ekraanisõltlane&#34; väljaanne</div>
        </>
        }
        
    </>
  )
}

export default Ilmumine

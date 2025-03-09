import { useState } from "react"
import TavaKalkulaator from "../components/TavaKalkulaator"
import LaenuKalkulaator from "../components/LaenuKalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator"

export default function Kalkulaator() {

    const [vaade, setVaade] = useState("tava")

    return (
        <>
            <button onClick={ () => setVaade("tava")}>Tavakalkulaator</button>
            <button onClick={ () => setVaade("laenu")}>Laenukalkulaator</button>
            <button onClick={ () => setVaade("maksimaalne")}>Maksimaalse laenu kalkulaator</button>
            
            <br/>
            
            {vaade === "tava" && <TavaKalkulaator/>}
            {vaade === "laenu" && <LaenuKalkulaator/>}
            {vaade === "maksimaalne" && <MaksimaalneKalkulaator/>}

        </>
  )
}

import { useRef, useState } from "react"
import tagasisideAndjadJSON from "../../data/nimed.json"

function TagasisideAndjad() {
    const [tagasisideAndjad, setTagasisideAndjad] = useState(tagasisideAndjadJSON.slice())
    const sisestaRef = useRef()

    return (
        <>  
            <div>Inimesi kokku: {tagasisideAndjad.length}</div>
            <br/>
            <button onClick={() => setTagasisideAndjad(tagasisideAndjadJSON.slice())}>Reset</button>
            <button onClick={() => setTagasisideAndjad(tagasisideAndjad.filter(i => i.startsWith('M')))}>Näita M-iga algavaid</button>
            <button onClick={() => setTagasisideAndjad(tagasisideAndjad.filter(i => i.length === 6))}>Näita 6-tähelisi</button>
            <button onClick={() => setTagasisideAndjad(tagasisideAndjad.filter(i => i.endsWith('y')))}>Näita y-ga lõppevaid</button>
            <button onClick={() => setTagasisideAndjad(tagasisideAndjad.toSorted((a, b) => b.localeCompare(a)))}>Sorteeri Z-A</button>
            <br/>
            <label>Sisesta inimene: </label>
            <input type="text" ref={sisestaRef}/>
            <button onClick={() => setTagasisideAndjad(tagasisideAndjad.concat(sisestaRef.current.value))}>OK</button>
            <br/><br/>

            {tagasisideAndjad.map((name, index) => <span className="name" onClick={() => setTagasisideAndjad(tagasisideAndjad.filter(a => a != name))} key={name}>{index + 1}. {name} </span>)}
        </>
    )
}

export default TagasisideAndjad

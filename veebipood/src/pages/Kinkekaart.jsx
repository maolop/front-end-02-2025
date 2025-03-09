import { useState } from "react"

function Kinkekaart() {
    const [summa, setSumma] = useState(20);

    return (
        <>
            <br/>
            <button className={ summa === 20 ? "aktiivne" : "inaktiivne" } onClick={ () => setSumma(20) } >20€</button>
            <button className={ summa === 50 ? "aktiivne" : "inaktiivne" } onClick={ () => setSumma(50) } >50€</button>
            <button className={ summa === 100 ? "aktiivne" : "inaktiivne" } onClick={ () => setSumma(100) } >100€</button>
            <div>Kinkekaart {summa}</div>
        </>
  )
}

export default Kinkekaart

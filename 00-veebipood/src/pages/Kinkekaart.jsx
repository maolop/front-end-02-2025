import { useRef, useState } from "react"

function Kinkekaart() {
    const [summa, setSumma] = useState(20)
    const [kogus, setKogus] = useState(1)
    const [sonum, setSonum] = useState("")
    const emailRef = useRef()

    const sisesta = () => {
        if (emailRef.current.value.includes("@") === false) {
            setSonum("E-mail pole korrektne")
            return
        }
        if (emailRef.current.value.length < 6) {
            setSonum("E-mail pole korrektne")
            return
        }
        
        setSonum("E-mail edukalt lisatud")
    }

    return (
        <>
            <br/>
            <button className={ summa === 20 ? "aktiivne" : "inaktiivne" } onClick={ () => setSumma(20) } >20€</button>
            <button className={ summa === 50 ? "aktiivne" : "inaktiivne" } onClick={ () => setSumma(50) } >50€</button>
            <button className={ summa === 100 ? "aktiivne" : "inaktiivne" } onClick={ () => setSumma(100) } >100€</button>
            <div>Kinkekaart {summa}</div>

            <br/><br/>

            <button disabled={kogus === 1} onClick={() => setKogus(kogus-1)}>-</button>
            <span>{kogus}</span>
            <button onClick={() => setKogus(kogus+1)}>+</button>

            <br/><br/>
            <label>E-mail </label>
            <input ref={emailRef} type="text" name="" id="" />
            <button onClick={sisesta}>Lisa</button>
            <div>{sonum}</div>
        </>
  )
}

export default Kinkekaart

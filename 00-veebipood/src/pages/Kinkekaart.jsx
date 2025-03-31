import { useRef, useState } from "react"
import ostukorvFailist from "../data/ostukorv.json"

function Kinkekaart() {
    const [summa, setSumma] = useState(20)
    const [kogus, setKogus] = useState(1)
    const [sonum, setSonum] = useState("")
    const emailRef = useRef()

    const lisaOstukorvi = () => {
        const toode = {
           "nimi": "Kinkekaart",
           "hind": summa * kogus,
           "aktiivne": true,
           "pilt": "https://shop.msonic.ee/cdn/shop/products/e38bd83af578077b65a31424bd24d085_500x.png"
        }
        ostukorvFailist.push(toode)
        setSonum(`Kinkekaardid lisatud`)
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
            <br/>
            <div>Kokku {summa * kogus}€</div>
            <button onClick={lisaOstukorvi}>Lisa ostukorvi</button>
            <div>{sonum}</div>
        </>
  )
}

export default Kinkekaart

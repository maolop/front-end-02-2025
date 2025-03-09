import { useState } from 'react'

export default function Lisa() {
  const [message, setMessage] = useState("Lisa arvuti!")

  return (
    <>

      <h1>Lisa sülearvuti</h1>
      <div>{message}</div>
      <label>Mark </label>
      <input type='text'/>
      <label>Mudel</label>
      <input type='text'/>
      <label>Hind</label>
      <input type='text'/>
      <br/>
      
      {message !== "Lisatud!" && <button onClick={ () => setMessage("Lisatud!") }>Sisesta</button>}


    </>
  )
}

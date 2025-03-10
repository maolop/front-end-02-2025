import { useState } from 'react'

export default function Lisa() {
  const [message, setMessage] = useState("Lisa arvuti!")
  const [showButton, setShowButton] = useState(true)

  function addProduct () {
    setMessage("Arvuti lisatud")
    setShowButton(false)
  }
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
      
      {showButton && <button onClick={ () => addProduct() }>Sisesta</button>}
    </>
  )
}

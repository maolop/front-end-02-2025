import { Link } from "react-router-dom"

function Ostukorv() {
  return (
    <div>
      <button>Tühjenda</button>
      <div>
        Ostukorv on tühi. <Link to="/">Mine tooteid lisama</Link>
      </div>
    </div>
  )
}

export default Ostukorv
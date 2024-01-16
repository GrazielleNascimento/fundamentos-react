import { useState } from 'react'
import './Contador.css'

function Contador() {
  //useState = criar uma variável de estado
  const [numero, setNumero] = useState(0)

  function somarMaisUm(){
    setNumero(numero + 1)
  }

  return (
    <div className="container">
        <p>O valor é: { numero }</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador
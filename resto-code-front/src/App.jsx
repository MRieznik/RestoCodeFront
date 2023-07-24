import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import Registro from './Pages/registro/Registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registro />
    </>
  )
}

export default App

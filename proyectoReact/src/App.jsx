import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Interprete from './components/UT02/ejercicio2_03/ejercicio2/Interprete'
import Contenedor from './components/UT02/ejercicio2_03/ejercicio1/Contenedor'
import Pelicula from './components/UT02/ejercicio2_03/ejercicio3/Pelicula'
import Listado from './components/UT03_useState/Ejercicios3_08/Listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hola</h1>
      <Listado/>
    </>
  )
}

export default App

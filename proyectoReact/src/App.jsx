import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Interprete from './components/UT02/ejercicio2_03/ejercicio2/Interprete'
import Contenedor from './components/UT02/ejercicio2_03/ejercicio1/Contenedor'
import Pelicula from './components/UT02/ejercicio2_03/ejercicio3/Pelicula'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <section id="center">
        <h2>¡Hola,React!</h2>

      <Contenedor>
      <Interprete
        nombre="Hugo" 
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS592MI5HPcc05BaM2-C3WPuw4DYiWJojYKm9qsV1EJ_hl1cmESl-Bsozg&s=10"
        >
          Esto son los cocokranes
        </Interprete>

        <Interprete
        nombre="Bomboclat"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5mFWVupn0tVyACf1xAk73qVmPmvxglw0gm1a3TFIYw&s=10"
        >
          MI BOMBOCLAAAT
        </Interprete>

      </Contenedor>

      <Pelicula
      titulo="Club de la Lucha"
      direccion="David Fincher"
      cartelera="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnNDrJNgxA5hZPfuhD6Shb7wmNdvJ_lJe90KTII7vbQ&s=10"

      >
        Narra la historia de un empleado de oficina aburrido e insomne que crea un club de pelea secreto con un vendedor de jabón anarquista.
        
        Elenco Principal Edward Norton como el Narrador (protagonista sin nombre) Brad Pitt como Tyler Durden Helena Bonham Carter como Marla Singer
      </Pelicula>
       
        </section>
    </>
  )
}

export default App

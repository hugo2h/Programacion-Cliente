import React, { useState } from 'react'

const Listado = () => {

    const [numero, setNumero] = useState([]);    

    const generar = () => {

        let num = Math.floor(Math.random() * 100) + 1;
        if (!numero.includes(num)) {
            setNumero([...numero, num]);
        } else {
            generar();
        }
        
    }

    const eliminar = () => {
        setNumero([]);
    }

  return (
    <>
    
    <div>

        <button onClick={generar}>Generar</button>
        <button onClick={eliminar}>Eliminar</button>

        <ul>
            {numero.map((num, index) => (
                <li key={index}>{index + 1}. {num}</li>
            ))}
        </ul>
    </div>
        

    </>
  )
}

export default Listado;
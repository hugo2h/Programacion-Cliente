import React from "react";
import "./Contenedor.css";
const Contenedor = (props) => {

    return(
        <>
        
        <div className="contenedor-contenedor">
            <p>{props.children}</p>
            <p>Esto es un contenedor</p>
            
        </div>

        </>
    )

};

export default Contenedor;
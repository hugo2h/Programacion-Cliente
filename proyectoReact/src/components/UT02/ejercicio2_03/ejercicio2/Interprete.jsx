import React from "react";
import "./Interprete.css";

const Interprete = (props) =>{

    return (
        <>
        <div className="interprete-contenedor">
            <img src={props.imagen}/>
            <h2>{props.nombre}</h2>
            <h4>{props.children}</h4>
        </div>
        </>
    );

};

export default Interprete;
import React from "react";
import "./Pelicula.css";

const Pelicula = (props) => {

    return(
        <>
        <h2>{props.titulo}</h2>
        <h3>{props.direccion}</h3>
        <img src={props.cartelera}/>
        <h4>{props.children}</h4>
        </>
    );

}

export default Pelicula;
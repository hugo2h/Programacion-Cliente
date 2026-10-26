"use strict";


const mayus = (array) =>{
    return array.map((v,i,a) => {
        return v.toUpperCase();
    }).join(", ")
};

const delReves = (array) => {
    
    return array.toSorted((a,b) => {
        return b.localeCompare(a);
    }).join(", ");

};

const aObjetos = (array) => {
    
    return array.map((v,i,a)=>{
        return {
            indice: i,
             nombre: v};
    });
};

const imprimirObjetos = (array) => {
  array.forEach((v, i, a) => {
    console.log(`id: ${v.indice} nombre: ${v.nombre}`);
  });
};


export {mayus, delReves, aObjetos, imprimirObjetos};
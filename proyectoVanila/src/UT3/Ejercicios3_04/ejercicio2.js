"use strict";

const arrayRandom = () => {

        return new Array(10).fill().map((v,i,a) => {
            return Math.floor(Math.random() *10)+1;
        })
}

const mayorDe5 = (array1,array2,array3) => {
    let juntos = [...array1, ...array2, ...array3];

    return juntos.filter((v,i,a) => {
        return v > 5;
    }).join(", ")
}

export { arrayRandom, mayorDe5 };
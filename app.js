// Escribe tu código aquí.

//Problema 1 funcion para detectar palabras largas
console.log("hola")

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const word = 'bocina';

function bigWords (word,wordArray){
    const result= [];
    let longitud = word.length
    console.log(longitud)
    for (let item of myArray){
        if (item.length > longitud){
            result.push(item);
        }
    }
    return result;
    
}

console.log(bigWords(word,myArray))

let finalResult = bigWords(word,myArray)

const unordlist = document.querySelector(".unorderedlist")
console.log(unordlist)

finalResult.forEach(item=>{
    console.log(item)
    let elementoDeLista = document.createElement("li")
    elementoDeLista.innerHTML = item
    unordlist.appendChild(elementoDeLista)
    console.log(elementoDeLista)
})

/*Notas

Me puse algo nervioso al tner que hacer el ejercicio sin poder acceder a internet y tener que hacerlo con la pura mente tratando de recordar como implementr de manera correcta las funciones y los elements, me trabe muchas veces en varias partes, pero iker me apoyo y al final si lo pude resolver, aunque necesito spracticar mas y estudiar mas la manipulacion del DOM */

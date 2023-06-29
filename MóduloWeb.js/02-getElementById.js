/* 
    Document HTML
        getElementById -> Trás um elemnto pelo Id
        getElementByClassName -> Trás TODOS elementos dessa classe
        getElementByTagName -> Trás TODOS elementos com essa TAG
        getElementByName -> Trás TODOS elementos com esse nome

        querySelector -> Trás um elemento, o Primeiro que encontrar
        querySelectorAll -> Trás TODOS elementos que encontrar
*/

const input = document.getElementById("main-input")

console.log(input)

const elements = document.getElementsByClassName("paragraph.js")

console.log(elements)

const tagname = document.getElementsByTagName("h1")

console.log(tagname)

const nami = document.getElementsByName("Nome-completo")

console.log(nami)

/*--------------------------------------------------------------*/

const queryT = document.querySelector("p") /* Pela Tag*/

console.log(queryT)

const queryC = document.querySelector(".paragraph,js") /*Pela Classe*/

console.log(queryC)

const queryI = document.querySelector("#main-input") /* Pelo ID */

console.log(queryI)

const queryS = document.querySelector("button.main-button") /* Seleciona oque aparecer primeiro */

console.log(queryS)

/*---------------------------------------------------------------- */


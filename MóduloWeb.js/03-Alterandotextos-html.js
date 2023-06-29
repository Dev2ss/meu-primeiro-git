// Alterando e Acessando textos

/* textContent -> Pega todo o conteúdo
   innerText -> Pega apenas o texto
   innerHTML -> Permite adicionar HTML e textos
*/

//const element = document.querySelector("#main-input")
//element.placeholder = "Agora é esse"

const element = document.querySelector(".oparagraph.js")
element.textContent = "o texto agr é esse" 

console.log(element.textContent) // SÓ HTML
console.log(element.innerText) // LEVA EM CONTA O CSS
console.log(element.innerHTML) // TRÁS TUDO 
const input = document.querySelector("#input-main")
const select = document.querySelector("select")
const button = document.querySelector(".Button")

//select.addEventListener("change", function() {
   // console.log("Troquei de Valor") })

   function troqueiValor(event) {
    console.log(event)
   }

   input.addEventListener("keypress" , troqueiValor)
/*   
  Tipos de Dados
    String -> Textos = ""
    Number -> Numeros = 1,2,3...
    Boolean -> Boleano = true, false
    Object -> Objeto = {}
    Null & Undefined
*/
const texto1 ="Digite seu 'texto'"
const texto2 ='Digite seu "texto"'
const texto3 =`Digite seu texto` // Template Literals ou Template String

const MyAge = 24
const MyCar = 'BMW'

const myString = `Minha idade é ${MyAge}, to ficando velho,
mas estou andando de ${MyCar}.`

console.log(myString)

const Number1 = 45 / 3
const fakenumber = '45 / 3'

console.log (Number1)
console.log (fakenumber)


const Lucas = {
  name: "Lucas",
  age: 25,
  address: {
    street: "Dos Bobos",
    number: 0,
    city: "São Paulo",
    state: "SP",
    country: "Brasil"
  }
}

Lucas.address = "Rua dos tolos"
console.log (Lucas) 



// Estruturas de Dados

/* Array -> [] = */ 

const users = [
  { name: "Lucas", age: 25, city: "SP"},
  { name: "Albertina", age: 29},
]
users[1].name="laryssa"
console.log(users)

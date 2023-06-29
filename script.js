const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
      
    const dolarToDay = 4.79
    const euroToDay = 6.48
    const libraToDay = 7.15
    const bitcoinToDay = 835.053

    if(currencySelect.value == "dolar"){
        // Se o valor estiver selecionado no dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US" , {
            style: "currency" ,
            currency: "USD"
        }).format(inputCurrencyValue / dolarToDay)
    }

    if(currencySelect.value == "euro"){ 
        // Se o valor estiver selecionado no euro, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE" , {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToDay)
    }

    if(currencySelect.value == "libra"){
        // Se o valor estiver selecionado no libra, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK" , {
            style: "currency" ,
            currency: "GBP"
        }).format(inputCurrencyValue / libraToDay)
    }

    if(currencySelect.value == "bitcoin"){
        // Se o valor estiver selecionado no libra, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US" , {
            style: "currency" ,
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToDay)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency" ,
        currency: "BRL"
    }).format(inputCurrencyValue)
}   

function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")
   
   if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "../assets/estados-unidos (1) 1.png"
   }

   if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "../assets/euro.png"
   }

   if(currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "../assets/libra.png" 
   }

   if(currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "../assets/bitcoin 1.png"
   }

   convertValues()
}

currencySelect.addEventListener("change" , changeCurrency)
convertButton.addEventListener("click", convertValues)
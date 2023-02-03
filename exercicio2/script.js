let primeiroNumero = Number(prompt(`Digite o primeiro numero`))
let segundoNumero = Number(prompt(`Digite o segundo numero`))

let comparacao = primeiroNumero > segundoNumero
let igual = primeiroNumero === segundoNumero

let divisaoPrimeiroNumero = primeiroNumero % segundoNumero
let restoPrimeiroNumero = divisaoPrimeiroNumero === 0

let divisaoSegundoNumero = segundoNumero % primeiroNumero
let restoSedungoNumero = divisaoSegundoNumero === 0

console.log(`O primeiro numero é maior que o segundo? ${comparacao}
O primeiro numero é igual ao segundo? ${igual}
O primeiro numero é divisível pelo segundo? ${restoPrimeiroNumero}
O segundo numero é divisível pelo primeiro? ${restoSedungoNumero}`)
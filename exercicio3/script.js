//Parte 1

// let result = (5 > 20 && 5 < 2)
// console.log(result)

// let result2 = (5 === 5 || 5 === "5")
// console.log(result2)

// let = result3 = (!20 > 50)
// console.log(result3)

// let result4 = (result3 || 50 > 60)
// console.log(result4)

//Parte 2

let vendasJaneiro = 5784.50
let vendasFevereiro = 3418.41
let vendasMarco = 4124.10
let vendasAbril = 1874
let vendasMaio = 7000
let vendasJunho = 9450

let salarioFixo = 2000
let auxilioCreche = 45.50 
let comissao = (vendasJaneiro * 0.1)
let inss = 0.05

let salarioLiquido = ((salarioFixo + comissao) * inss + 2 * auxilioCreche)

//1

let salarioMaisauxilio = salarioFixo + 2 * auxilioCreche
// console.log(`O salario fixo mais auxilio creche: ${salarioFixo + 2 * auxilioCreche}`)

//2

let comissaoJaneiro = vendasJaneiro * 0.1
console.log(comissaoJaneiro)

let comissaoFevereiro = vendasFevereiro * 0.1
let comissaoMarco = vendasMarco * 0.1
let comissaoAbril = vendasAbril * 0.1
let comissaoMaio = vendasMaio * 0.1
let comissaoJunho = vendasJunho * 0.1

//3

let InssJaneiro = (salarioFixo + comissaoJaneiro) * inss
console.log(InssJaneiro)

let InssFevereiro = (salarioFixo + comissaoFevereiro) * inss
console.log(InssFevereiro)
let InssMarco = (salarioFixo + comissaoMarco) * inss
console.log(InssMarco)
let InssAbril = (salarioFixo + comissaoAbril) * inss
console.log(InssAbril)
let InssMaio = (salarioFixo + comissaoMaio) * inss
console.log(InssMaio)
let InssJunho = (salarioFixo + comissaoJunho) * inss
console.log(InssJunho)

//4

let salarioJaneiro = ((salarioFixo + comissaoJaneiro) - InssJaneiro + (2 * auxilioCreche))
let salarioFevereiro = ((salarioFixo + comissaoFevereiro) - InssFevereiro + (2 * auxilioCreche))
let salarioMarco = ((salarioFixo + comissaoMarco) - InssMarco + (2 * auxilioCreche))
let salarioAbril = ((salarioFixo + comissaoAbril) - InssAbril + (2 * auxilioCreche))
let salarioMaio = ((salarioFixo + comissaoMaio) - InssMaio + 2 * auxilioCreche)
let salarioJunho = ((salarioFixo + comissaoJunho) - InssJunho + (2 * auxilioCreche))

console.log(salarioJaneiro , salarioFevereiro , salarioMarco , salarioAbril , 
    salarioMaio , salarioJunho)

//5

let mediaSalarial = (salarioJaneiro + salarioFevereiro + salarioMarco +
     salarioAbril + salarioMaio + salarioJunho) / 6

console.log(mediaSalarial)
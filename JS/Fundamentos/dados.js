// dados 1
var nome = "caneta"
var quant = 10
var preco = 6.4
let imposto = 1.5
let precoFinal = preco + imposto

console.log(nome)
console.log(quant)
console.log(preco)
console.log(imposto)
console.log(precoFinal)
nome = "caneta azul"
console.log(nome)

// dados 2
let total = 19.90
let desc = 0.4
console.log(19.9 * 0.6)

let precoComDesconto = total * (1 - desc)
console.log(precoComDesconto)

var produto = 'caderno' //String (texto)->sequencia de simbolos
let compra = "papelaria"
console.log('produto: ' + produto + ';' + ' ' + "compra: " + compra)

// dados 3; tipos basicos
let idade = 31 // number
console.log(typeof 31) // função para descobrir o tipo de variavel
console.log(typeof idade)
var salario = 45.72 // number
console.log(typeof salario)

let chuva = true // or false
console.log(typeof chuva) //boolean

console.log(typeof "teste") // string
console.log(typeof 'teste') // string

// dados 4 -> variavel constante
var id = 3 
id = id + 10
console.log(id) // Ok

const a = 3
// a = a + 10 -> TypeError: Assignment to constant variable
console.log(a)
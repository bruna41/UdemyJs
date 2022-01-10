const escola = "Cod3r"

console.log(escola.charAt(4)) // determinado caracter dentro da string
console.log(escola.charAt(5))

console.log(escola.charCodeAt('3')) // o codigo do caracter

console.log(escola.indexOf('o')) // lugar do caracter a partir de 0

console.log(escola.substring(1)) // mostra os caracteres a partir do 1
console.log(escola.substring(0, 3)) // mostra sem o terceiro

console.log('Escola '.concat(escola).concat("!")) // equivalente ao "+" 

console.log(escola.replace(3, 'e')) // substitui o '3' pelo 'e'
console.log(escola.replace(/\d/, 'e')) // substitui todos os digitos pelo 'e'
console.log(escola.replace(/\w/g, 'e')) // substitui todos os caracteres pelo 'e'

console.log('Ana,Maria,Pedro'.split(',')) // Array*
console.log('Ana,Maria,Pedro'.split(/,/))

// Template
const nome = 'Rebeca'
const conct = 'Olá' + nome + '!'
const template = `
    Olá 
    ${nome}`
console.log(conct, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
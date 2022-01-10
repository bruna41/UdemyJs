// PI * raio * raio

const PI = 3.14
const raio = 10
var areaCirc = PI * raio * raio

console.log('a area é ' + areaCirc + 'm2')

areaCirc = Math.PI * raio * raio
console.log('a area é ' + areaCirc + 'm2')

// troca de valores
let a = 7
let b = 94
a = b
console.log(a)
b =7
console.log(b)

// ou
let a = 7
let b = 94

let temp = a
a = b
b = temp
console.log(a)
console.log(b)
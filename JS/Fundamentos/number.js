const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // inteiro ou não
console.log(Number.isInteger(peso2))

const ava1 = 9.871
const ava2 = 6.871

const total = ava1 * peso1 + ava2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // casas decimais
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof Number)

// Math
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)
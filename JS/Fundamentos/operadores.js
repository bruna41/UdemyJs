// aritimédicos; binários
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const sub = d - b
const multi = a * b
const div = d / a
const modulo = a % 2
const exp = a ** 3
let base = a
base **= 3

console.log(soma, sub, div, modulo, exp, base)

// relacionais; binários; verdadeiro ou falso
console.log('01)', '1' == 1) // compara valor
console.log('02)', '1' === 1) // compara tipo
console.log('03)', '3' != 3) // diferença de valor
console.log('04)', '3' !== 3) // diferença de tipo

console.log('05)', 3 < 2) // menor
console.log('06)', 3 > 2) // maior
console.log('07)', 3 <= 2) // menor ou igual
console.log('08)', 3 >= 2) // maior ou igual

// lógicos; binários/unários
/* tabela verdade
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f
v xor f -> v
f ou v -> v
f xor f -> f

!v -> f
!f -> v */

function compras(t1, t2) {
    const comprarSorvete = t1 || t2 // ou
    const comprarTv50 = t1 && t2 // e
    // const comprarTv32 = !!(t1 ^ t2) //bitwise xor
    const comprarTv32 = t1 != t2 // diferente
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// unários
let num1 = 1
let num2 = 2

num1++  // posfixada
console.log(num1)
--num1 // prefixada; mais prioridade na operação
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

// ternário; 3 operandos
const resultado = nota => {
    return nota >= 7 ? "Aprovado" : "Reprovado"
}
console.log(resultado(7.1))
console.log(resultado(6.9))
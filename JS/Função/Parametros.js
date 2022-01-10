// parametros e retornos são opicionais
function area(l, al) {
    const area = l * al
    if (area > 20) {
        console.log(`valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,17,22,44))
console.log(area(5,5))

// parametros variáveis
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c'))

// parametro padão
// estrategia1
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // 'in arguments' procura p indice
    c = isNaN(c) ? 1 : c
    return a+b+c
}
console.log(soma2(), soma2(3), soma(1,2,3), soma2(0,0,0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a+b+c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))
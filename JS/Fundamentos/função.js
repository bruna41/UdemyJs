// função sem retorno
function imSoma(a, b) {
    console.log(a + b)
}

imSoma(2, 3)
imSoma(2)
imSoma (2, 3, 4, 5, 6, 7, 8)
imSoma()

// função com retorno
function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

// armazenando função em uma variavél
const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

// função arrow em uma variavél
const sub = (a, b) => a - b
console.log(sub(2, 3))
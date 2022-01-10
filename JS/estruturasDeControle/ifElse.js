const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado...')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado, o js lerá como reprovado por não ser valor numerico

// if/else if
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const imprimir = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Qquadro de Honra')
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}
imprimir(10)
imprimir(8.9)
imprimir(6.55)
imprimir(2.3)
imprimir(-1)
imprimir(11)
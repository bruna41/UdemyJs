let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
/* console.log(valor.toString()) -> 
                     TypeError: Cannot read property 'toString' of null */

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem valor
console.log(produto.preco)
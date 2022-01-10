const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Lapís", "preco": 1.50 }',
    '{ "nome": "Caneta", "preco": 7.40 }'
]

// Retornar array apenas com os preços
const paraObj = json => JSON.parse(json) // converte texto para obj
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)
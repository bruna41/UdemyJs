// filtro
const produtos = [
    { nome: 'Notrbook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: ' Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil:false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2450 && p.fragil
}))
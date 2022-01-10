// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul', 
        idade: 56,
        endereco: {
            rua: 'ABC', 
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana', 
        idade: 42
    }],
    valorSeguro: function() {
        // ...
    }
}
console.log(carro.condutores.length) //retorna qtd de condutores
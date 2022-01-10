// função que retorna um obj
// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())

// #2
function prod(nome, preco) {
    return {
        nome,
        preco,
        desconto: '10%'
    }
}
console.log(prod('note', 2199.59))
console.log(prod('iPad', 1199.49))

// class vs Função Factory
class pessoa { // tipo de função
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('João')
p1.falar()

const pessoa2 = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa2('João')
p2.falar()
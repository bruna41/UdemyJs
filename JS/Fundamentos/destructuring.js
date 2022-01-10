// retira determinada atribuição

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 1234
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bh = true } = pessoa
console.log(sobrenome, bh)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)

// array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9 , 6, 8]]
console.log(nota)
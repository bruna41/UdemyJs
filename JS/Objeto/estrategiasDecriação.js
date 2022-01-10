// Notação Literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Prod(nome, preco, desc) {
    this.nome = nome
    this.getPrecoDesc = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Prod('Caneta', 7.99, 0.15)
const p2 = new Prod('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoDesc(), p2.getPrecoDesc())

// Função Factory
function funcionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = funcionario('Ana', 11400, 1)
const f2 = funcionario('Jonas', 11400, 4)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Bia'
console.log(filha)

// JSON
const fromJSON = JSON.parse('{"info": "sou JSON"}')
console.log(fromJSON.info)
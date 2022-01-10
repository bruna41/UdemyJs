// Função em JS é First-class Object (Citizens)
// Higher-order function

// função literal
function fun1() {}

// em um variável
const fun2 = function () {}

// em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// em um atributo de obj
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar())

// passar uma função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('executando...') })

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
// ou
const cincoMais = soma(2, 3)
cincoMais(4)

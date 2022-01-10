// '{}' -> indica um objeto
const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 49.90
prod1['Desconto Legal'] = 0.40
console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 50,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)
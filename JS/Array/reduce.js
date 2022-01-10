// acumulativo
const alunos = [
    { nome: 'João', nota: 7.3, bolsa: false },
    { nome: 'Maria', nota: 9.2, bolsa: true },
    { nome: 'Pedro', nota: 9.8, bolsa: false },
    { nome: 'Ana', nota: 8.7, bolsa: true }
]

console.log(alunos.map(a => a.nota * 2))
const resultado = alunos.map(a => a.nota * 2).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)
console.log(resultado)
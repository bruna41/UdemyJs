const alunos = [
    { nome: 'João', nota: 7.3, bolsa: false },
    { nome: 'Maria', nota: 9.2, bolsa: true },
    { nome: 'Pedro', nota: 9.8, bolsa: false },
    { nome: 'Ana', nota: 8.7, bolsa: true }
]

// todos os alunos são bolsistas?
const todosB = (resultado, bolsa) => resultado && bolsa
console.log(alunos.map(a => a.bolsa).reduce(todosB))

// algum aluna é bolsista?
const algumB = (resultado, bolsa) => resultado || bolsa
console.log(alunos.map(a => a.bolsa).reduce(algumB))
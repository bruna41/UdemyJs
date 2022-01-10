for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6, 7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}

//for/in; mostra os indices
const nota = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i in nota) {
    console.log(i, nota[i])
}

const pessoa = {
    nome: 'Ana',
    sn: 'silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
// adequada pra vezes indeterminadas
function getInterioAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
while (opcao != -1) {
    opcao = getInterioAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima!')

// do/while; executa pelo menos uma vez a repetição
function getInterioAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao2 = -1  // não é necessário atribuir um valor inicial para a variável opção
do {
    opcao = getInterioAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao2}.`)
 }while (opcao2 != -1)
console.log('Até a próxima!')

// vezes determinadas
let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
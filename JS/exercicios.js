// #1
function cumprimentar (nome) {
    return console.log('Olá,', nome, '!')
}
cumprimentar('Maria')
cumprimentar('Leo')
// resposta 1
function cumprimentar1 (nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}
console.log(cumprimentar1 ('Leonardo'))
console.log(cumprimentar1 ('Maria'))

// #2
function p (idade) {
    const d = 'dias.'
    return idade * 365 + ' ' + d
}
console.log(p(2))
console.log(p(70))
// resposta
function converterIdadeEmAnosParaDias(idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}
console.log(converterIdadeEmAnosParaDias(70))
    
// #3
function salario (horasTrabalhadas, pagoPorHora) {
    let resultado = horasTrabalhadas * pagoPorHora
    let imp = resultado - resultado * 30/100
    console.log('Salário igual a ' + `R$ ${parseFloat(imp).toFixed(2).replace('.', ',')}`)
}
salario(3, 30)
salario(150, 40.5)
salario(180, 60)
// resposta
function calcularSalarioLiquido(horasTrabalhadas1, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas1 * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100
    return `Salário igual a R$ ${salarioLiquido}`
}    
console.log(calcularSalarioLiquido(180, 60))
console.log(calcularSalarioLiquido(150, 30))

// #4
function mesDoAno (mes) {
    switch (mes) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        default:
            console.log('Inválido')
    }
}
mesDoAno(3)
mesDoAno(7)

//resposta 2
function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero];
}
console.log(receberNomeDoMes(9))    

// #5
function maiorOuIgual (a, b) {
    if (a >= b) {
        return true
    }else {
        return false
    }    
}
console.log(maiorOuIgual(3, 5))
console.log(maiorOuIgual(7, 3))
console.log(maiorOuIgual(0, '0'))
// resposta
function maiorOuIgual1(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}
console.log(maiorOuIgual1(0, '0'))
console.log(maiorOuIgual1(5, 5))

// #6
function inverso(valor) {
    const tipo = typeof valor
    if (tipo == 'boolean') {
        return !valor
    }else if (tipo == 'number') {
        return -valor
    }else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}
console.log(inverso(-2))    
console.log(inverso('oi'))

// #7

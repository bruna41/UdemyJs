// #1
function operacoes(a = 3, b = 4) {
    console.log(a + b, ';', a - b, ';', a * b, ';', a / b)
}
operacoes()

// #2
function ladosT(a, b, c) {
    if (a == b && b == c) {
        return 'Equi'
    } else if (a == b || b == c || a == c) {
        return 'Iso'
    } else {
        return 'Esc'
    }
}
console.log(ladosT(5, 5, 5))

// #3
function exp(a, b) {
    c = a ** b
    return c
}
console.log(exp(2, 3))

// #4
function div(a, b) {
    console.log('Resultado: ' + (a / b)) // com 'Math.floor' fica '2' por ser o menor inteiro
    console.log(`Resto: ${a % b}`)
}
div(5, 2)

// #5
function formatarValorDecimal(valor) {
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}
formatarValorDecimal(0.1 + 0.2)

// #6
function jurosSimples(cI, taxa, tempo) {
    return cI + (cI * taxa * tempo)
}
function jurosCompostos(cI, taxa, tempo) {
    return cI * (1 + taxa) ** tempo
}
console.log(jurosSimples(100, 10 / 100, 2))
console.log(jurosSimples(100, 10 / 100, 3))

// #7; 'Math.sqrt' retorna a raiz quadrada
function Bhaskara(ax2, bx, c) {
    let resultado = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        console.log('Delta negativo')
    }
    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2
    resultado.push(x1)
    resultado.push(x2)
    return resultado
}
console.log(Bhaskara(3, 12, -5))
console.log(Bhaskara(3, -5, 12))

// # 8
let pontuacoes = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'
function avaliacao(pontuacoes) {
    let pontos = pontuacoes.split(', ')
    let recordes = 0
    let piorJogo = 1
    let maiorP = pontos[0]
    let menorP = pontos[0]

    for (let i = 1; i < pontos.length; i++) {
        if (pontos[i] > maiorP) {
            maiorP = pontos[i]
            recordes++
        } else if (pontos[i] < menorP) {
            menorP = pontos[i]
            piorJogo = i + 1
        }
    }
    return [recordes, piorJogo]
}
console.log(avaliacao(pontuacoes))

// #9
function classificacao(nota) {
    let corrigida = arredondar(nota)
    if (corrigida >= 40) {
        console.log('Aprovado com ' + corrigida)
    } else {
        console.log('Reprovado com ' + corrigida)
    }
}
function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}
classificacao(98)
classificacao(38)
classificacao(29)
classificacao(88)
classificacao(58)
classificacao(62)

// #10
function verificadiv(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}
console.log(verificadiv(10))
console.log(verificadiv(15))
console.log(verificadiv(3))
console.log(verificadiv(150))

// #11
function bissexto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}
console.log(bissexto(0))
console.log(bissexto(4))
console.log(bissexto(100))
console.log(bissexto(400))
console.log(bissexto(2020))
console.log(bissexto(2021))

// #12
function fatorial(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(10))

// #13
const semana = function (dia) {
    switch (Math.floor(dia)) {
        case 1: case 7:
            console.log('Fim de semana')
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil')
            break
        default:
            console.log('Dia inválido')
    }
}
semana(10)
semana(7)
semana(4)
semana(2)

// #14
function feira(fruta) {
    switch (fruta) {
        case 'maça':
            console.log('Não vendemos')
            break
        case 'kiwi':
            console.log('Escassez de kiwi')
            break
        case 'melancia':
            console.log('3 reais o quilo')
            break
        default:
            console.log('Erro')
    }
}
feira('maça')
feira('kiwi')
feira('melancia')
feira('banana')

// #15
function carros(modelos) {
    switch (modelos) {
        case 'hatch':
            console.log('Compra efetuada')
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            console.log('Tem certeza?')
            break
        default:
            console.log('Não vendemos')
    }
}
carros('hatch')
carros('sedan')
carros('motocicleta')
carros('caminhonete')
carros('Uno')

//#16
function calculadora(v1, op, v2) {
    switch (op) {
        case '+':
            return v1 + v2
        default:
            return 'Operação inválida'
    }
}
console.log(calculadora(2, '+', 3))
console.log(calculadora())

// #17
function reajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido'
    }
}
console.log(reajuste('A', 1000))
console.log(reajuste('B', 1000))
console.log(reajuste('C', 1000))
console.log(reajuste('D', 1000))

// #18
function extenso(numeros) {
    switch (numeros) {
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 0:
            console.log('Zero')
            break
        default:
            console.log('Fora do Intervalo')
    }
}
extenso(0)
extenso(2)
extenso(3)
extenso(4)
extenso(11)

// #19
function lanche(codigo, qtd, preco) {
    switch (codigo) {
        case 100:
            return qtd * preco
        case 200:
            return qtd * preco
        case 300:
            return qtd * preco
        case 400:
            return qtd * preco
        case 500:
            return qtd * preco
        case 600:
            return qtd * preco
        default:
            return 'Inexistente'
    }
}
console.log(lanche(100, 2, 3))
console.log(lanche(200, 3, 4))
console.log(lanche(300, 2, 5.50))
console.log(lanche(600, 2, 2.80))
console.log(lanche())

// #20
function sacarDonheiro(valorSaque) {
    let cont100 = 0
    let cont50 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                cont100++
                break
            case 50:
                valorSaque -= 50
                cont50++
                break
            case 10:
                valorSaque -= 10
                cont10++
                break
            case 5:
                valorSaque -= 5
                cont5++
                break
            case 1:
                cont1++
                valorSaque -= 1
                break
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(cont100, cont50, cont10, cont5, cont1)
}
function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}
function elaborarResultado(cont100, cont50, cont10, cont5, cont1) {
    let resultado = ''
    if (cont100 > 0) {
        resultado += `${cont100} nota(s) de 100. `
    }
    if (cont50 > 0) {
        resultado += `${cont50} nota(s) de 50. `
    }
    if (cont10 > 0) {
        resultado += `${cont10} nota(s) de 10. `
    }
    if (cont5 > 0) {
        resultado += `${cont5} nota(s) de 5. `
    }
    if (cont1 > 0) {
        resultado += `${cont1} nota(s) de 1. `
    }
    return resultado
}
console.log(sacarDonheiro(153))
console.log(sacarDonheiro(15))
console.log(sacarDonheiro(2052))

// #21
function convenio(idade) {
    const pago = 100
    if (idade < 10) {
        return pago + 80
    }
    if (idade < 30) {
        return pago + 50
    }
    if (idade <= 60) {
        return pago + 95
    }
    if (idade > 60) {
        return pago + 130
    }
}
console.log(convenio(9))
console.log(convenio(32))
console.log(convenio(45))
console.log(convenio(58))
console.log(convenio(63))

// #22
function jurosC(mes, valor) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * (1 + (5 / 100) * atraso)).toFixed(2)
    } else {
        return 'Mes inválido.'
    }
}
console.log(jurosC(4, 100))
console.log(jurosC(6, 100))
console.log(jurosC(14, 100))
console.log(jurosC(12, 100))

// #23
function notaFinal(codigo, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}, ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`)
}
notaFinal(123, 2.8, 6, 3.5)

// #24
function primeiraFrase () {
    let i = 1
    while (i <= 11) {
        console.log(i++ + '-Hello Word')
    }
}
primeiraFrase()

// #25
function contagem () {
    for (let i = 1; i <= 50; i++)
    console.log(i)
}
contagem ()

// #26
function pares () {
    for (let i = 1; i <= 100; i++){
        if (i % 2 == 0) {
            console.log(i)
        }else {
            console.log('Ímpar')
        }
    }
}
pares ()

// 27
function calcularCrescimento (altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return '1 ultrapassará 2 em 1 ano'
        }else if (taxa1 < taxa2) {
            return '2 ultrapassará 1 em 1 ano'
        }else {
            return 'Mesma altura e crescimento'
        }
    }else {
        if (altura1 > altura2) {
            if (taxa1>= taxa2) {
                return 'A menor não ultrapassará a maior'
            }else {
                return `A menor ultrpassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }else {
            if (taxa2 >= taxa1) {
                return 'A menor não ultrapassará a maior'
            }else {
                return `A menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}
function calcularTempo (alturaMenor, taxaAM, alturaMaior, taxaAMa) {
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAM
        alturaMaior += taxaAMa
        qtdAnos++
    }
    return qtdAnos
}
console.log(calcularCrescimento(150, 2, 130, 4))
console.log(calcularCrescimento(150, 3, 140, 6))
console.log(calcularCrescimento(140, 4, 140, 2))
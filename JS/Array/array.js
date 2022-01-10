// recomentado forma homogenêa
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
aprovados[3] = 'Paulo'
aprovados.push('Abia') // adicpna na ultima posição
console.log(aprovados.length) // tamanho do array

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort() // ordena, ordem alfabética
console.log(aprovados)

delete aprovados[4]
console.log(aprovados)
console.log(aprovados[4])
console.log(aprovados[5])

aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1, 1) // adicionar, remover, adicionar e remover ao mesmo tempo
console.log(aprovados)
aprovados.splice(1, 2)
console.log(aprovados)
aprovados.splice(1, 0)
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
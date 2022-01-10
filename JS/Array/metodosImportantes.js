const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice -> adiciona/remove

const algunsPilotos = pilotos.slice(2) // novo array, a partir do indice 2
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1, 3) // 'pedaço'; o indici 3 não entra
console.log(algunsPilotos2)
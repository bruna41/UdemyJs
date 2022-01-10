// tradução: "jogar pra cima"
console.log('a =', a)
var a = 2             // na linha de cima a variavél não será atribuida, mas não consta erro
console.log('a =', a)

console.log('b =', b)
let b = 3            // içamento não ocorre; 'Cannot access 'b' before initialization'
console.log('b =', b)
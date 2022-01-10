function SBN(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}
SBN(8.1)
SBN(6.1)

function SFVEF(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}
SFVEF()
SFVEF(null)
SFVEF(NaN)
SFVEF('')
SFVEF(0)
SFVEF(-1)
SFVEF(' ')
SFVEF('?')
SFVEF([])
SFVEF([1, 2])
SFVEF({})

//CUIDADO
function teste1(num) {
    if(num > 7)
    console.log(num)

  console.log('Final') // não associada ao 'if'  
}
teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // o ';' fechou a estrutura de controle, console não está associado
        console.log(num)
    }
}
teste2(6)
teste2(8)
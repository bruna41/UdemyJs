{
    {
        {
            {
                var sera = "Será???"
                console.log(sera) // aparece com console dentro ou fora do bloco
            
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
/* teste()
 console.log(local) lido apenas dentro do escopo (função) */
 
 // 2
 var numero = 1
 {
     var numero = 2
     console.log('dentro = ', numero)
 }
console.log('fora = ', numero)
// escopo global e de função

// var em loop
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i) //visivel dentro e fora do escopo

// loop #2
const funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push (function() {
        console.log(i) // var não tem escopo dentro da função, portanto imprime sempre 10
    })
}
funcs[2]()
funcs[8]()
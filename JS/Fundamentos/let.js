let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// escopo global, de função e de bloco

//let em loop
for (let i = 0; i < 10; i++) { //visivel somente dentro do escopo
    console.log(i)
}
//console.log('i =', i) 
/* console.log('i =', i)
^

ReferenceError: i is not defined */

// loop #2
const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push (function() {   // tem memoria de bloco
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // procura na hierarquia de prototipos
console.log(ferrari.__proto__ === Object.prototype)
console.log(ferrari.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObj() {}
console.log(typeof Object, typeof MeuObj)
console.log(Object.prototype, MeuObj.prototype)

// #2
// Hierarquia de protótipos (prototype chain)
Object.prototype.attr0 = 'z'
const avo = { attr1: 'a'}
const mae = {__proto__: avo, attr2: 'b', attr3: '3'}
const filha = {__proto__: mae, attr3: 'c'}
console.log(filha.attr0, filha.attr1, filha.attr2, filha.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}
const uno = {
    modelo: 'F40',
    velMax: 324 // shadowing -> sombreamento
}
const fusca = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // 'super' -> referenciar o protótipo
    }
}
Object.setPrototypeOf(uno, carro) // estabelece relação de protótipo
Object.setPrototypeOf(fusca, carro) 
console.log(uno)
console.log(fusca)

fusca.acelerarMais(100)
console.log(fusca.status())
uno.acelerarMais(300)
console.log(uno.status())

// #3 -> Object.create
const tia = {nome: 'Pedro', corCabelo: 'preto'}
const filho1 = Object.create(tia)
filho1.nome = 'Lucas'
console.log(filho1.corCabelo)

const filho2 = Object.create(tia, {
    nome: { value: 'Julio', writable: false, enumerable: true}  
})
console.log(filho2.nome)
filho2.nome = 'Bruno'
console.log(`${filho2.nome} tem cobelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for (let key in filho2) {
    filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`) 
}

// #4
function MeuObjeto() {}
console.log(MeuObj.prototype)

const obj1 = new MeuObjeto 
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Antônio'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}.`)
}
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === undefined)
console.log(Object.prototype.__proto__ === null)

// #5
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())
String.prototype.toString = function () {
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// #6
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)
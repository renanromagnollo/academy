const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//-------------------------------------


const avo = { atr1: 'A'}
const pai = { __proto__: avo, atr2: 'B'}
const filho = { 
    __proto__: pai, 
    atr3: 'C'
}

console.log(filho.atr1)

//----------------------------------------

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velMax += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}?Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40', 
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

//---------------------------------------------

const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}

//---------------------------------------------------

function MeuObjeto() {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

MeuObjeto.prototype.nome = 'Anonimo' // isso é o equivalente a um atributo global do objeto
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj2.nome = 'Rafael'

//----------------------------------------------------

//Object.preventExtensions --> Evita novos atributos. Pode excluir, ser modificado, mas não criar novos atributos.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

//Object.seal --> Sela o obj, permitindo alterações nos atributos, mas não criar novos e nem excluir
const pessoa = { nome: 'Renan', idade: 33}
Object.seal(pessoa)

//Object.freeze --> Não consegue mexer em anda (Objeto Constante)

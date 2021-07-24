function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// Aqui foi declarado o preço do this da função pq sendo invocada assim, o this será do escopo global
global.preco = 20
global.desc = 0.1
console.log(getPreco())

// Invocando assim, o this será de escopo local
console.log(produto.getPreco())

// Passando função como parametro usando Call e Apply
const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // As formas de declarar os parametro são diferentes
console.log(getPreco.apply(carro, [0.17, '$'])) // Aply usa array
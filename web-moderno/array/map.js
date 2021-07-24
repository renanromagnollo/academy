const nums = [1, 2, 3, 4, 5]

// Map é um For com propósito resultando em um novo array

let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)



const soma10 = f => f + 10
const triplo = f => f * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


// Desafio Map !!!!!!!!!!!!********
// Retornar apenas os preços do array de json

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }'
]

const valor = obj => JSON.parse(obj)["preco"]

let resultado = carrinho.map(valor)

console.log(resultado)
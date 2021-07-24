// Filter é um For, assim como um Map, mas que filtra e gera um novo Array

const produtos = [
    { nome:  'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'nokia tijolão', preco: 10, fragil: false}
]

let condicao = obj => obj["preco"] > 500 && obj["fragil"] == true ? true : false

console.log(produtos.filter(condicao))


// Funcionamento interno do Filter

Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
}
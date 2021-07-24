// Criações de Objs

// usando a notação literal
const obj1 = {}

// Object em JS
const obj2 = new Object // Object é uma função, mas o new invoca como obj

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 6.88, 0.15)

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, // declarar os atributos assim é o mesmo que nome: nome
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7988, 4)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'

// JSON.parse
const variavel = JSON.parse('{"info": "Sou um JSON"}')
console.log(variavel.info)
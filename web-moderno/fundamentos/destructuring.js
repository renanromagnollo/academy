// serve para extrair informações sem necessidade do ponto

const pessoa = {
    nome: 'Renan',
    idade: 5,
    endereco: {
        logradouro: 'Rua João Batista',
        numero: 238
    }
}

const { nome, idade } = pessoa // Pegando os atributos nome e idade do obj pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Acessando atribuitos, definindo novas variáveis para eles (n e i)
console.log(n, i)

const { endereco: { logradouro, numero } } = pessoa // Acessando atributos de um objeto dentro do outro
console.log(logradouro, numero)


// --------------------------------------------------

const [a] = [10] // Criando variável desestruturando array

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // Selecionando conteúdo de arrays através de pulo e atribuindo a variáveis
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // Selecionando array de array
console.log(nota)

// ---------------------------------------------------

function rand({ min=0, max=100}) { // Aqui está extraindo os atributos de um objeto que será declarado, colocando um valor padrão
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    max: 50,
    min: 40
}

console.log(rand(obj)) // aqui está declando o objeto anterior
console.log(rand({min: 955})) // aqui está declarando apenas um objeto com o mínimo definido
console.log(rand({})) //aqui está declarando um objeto vazio, onde os valores serão os de padrão da função

// ----------------------------------------------------

function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
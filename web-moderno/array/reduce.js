// Reduce é um For com acumulador

const alunos = [
    { nome: 'João', nota: 5, bolsista: false },
    { nome: 'Maria', nota: 10, bolsista: true}
]

console.log(alunos.map(a => a.nota)) // Gerando um novo Array usando map, pegando só as notas do objeto

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // Esse 0 é um parametro que pode ser passado ou não, informando o valor inicial do acumulador

//--------------------------------------------------------------------------

// Desafio 1: Todos os alunos são bolsistas?

const alunos = [
    { nome: 'João', nota: 5, bolsista: false },
    { nome: 'Maria', nota: 10, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
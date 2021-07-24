// é um conjunto que não aceita repetição e não é indexada

const times = new Set()
times.add('Barcelona')
times.add('PSG')
times.add('Real Madrid')

console.log(times)
console.log(times.size) // mostra o tamanho
console.log(times.has('Barcelona')) // verifica se existe
times.delete('PSG') // deleta

// ------------------

const nomes = ['Renan', 'Sabrina', 'Arthur']
const nomesSet = new Set(nomes)
console.log(nomesSet)
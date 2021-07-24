const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // Não é aceito igual é com obj
console.log(tecnologias.get('react').framework) // Jeito correto

// ----------------------------------

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) // Verifica se existe o parametro passado
chavesVariadas.delete(123)
console.log(chavesVariadas.size)
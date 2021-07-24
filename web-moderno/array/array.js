let lista = new Array('Renan', 'Sabrina', 'Arthur')

lista.push('Mauricinho')
console.log(lista.length)

lista.sort()
console.log(lista)

delete lista[3] // mantém o índice no array como undefined

lista.push('Mauricinho') // correspondente ao append no Python

lista.splice(3, 1, 'Nayara') // Primero é o índice de início, segundo parametro a quantidade a partir do indice e a partir terceiro o que será acrescentado

//-----------------------------------------------------------------------

// Métodos Array:

const pilotos = ['Senan', 'Massa', 'Barrichelo']

// Inserir (Ultima posicao)
pilotos.push('Piquet')

// Inserir (Primeira posicao)
pilotos.unshift('B.Senna')

// Remover o último
pilotos.pop()

// Remove o primeiro
pilotos.shift()


// Splice pode adicionar e remover

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Mansell') //Primeiro o índice, segundo quantidade a ser removido, terceiro em diante os que serão inseridos

//remove
pilotos.splice(2, 2) //Primeiro o indice inicial, segundo quantos serao removidos


// Slice (Retorna um novo Array)

const algunsPilotos = pilotos.slice(2) // O parametro é o indice inicial

const outrosPilotos = pilotos.slice(2, 4) // Indice inicial e o final (o ultimo e o anterior ao indice do final declarado no parametro, assim como no recorte em Python)




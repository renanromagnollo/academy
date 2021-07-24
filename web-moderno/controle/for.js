const notas = [3, 54, 5, 6]

for (let i in notas) { // O "for in" percorre o índice e não o conteúdo como no Python
    console.log(i, notas[i])
}


const pessoa = {
    nome: 'Renan',
    sobrenome: 'Romagnoli',
    idade: 33
}

for (let x in pessoa) {
    console.log(`${x} = ${pessoa[x]}`)
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// O primeiro parametro é o conteúdo, o segundo é o indice e o terceiro é o array inteiro
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const eixirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
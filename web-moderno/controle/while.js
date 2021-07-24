function gerarInteiro(min, max) {
    const valor = Math.random() * (max - min) + min //Math.random gera 0 e 1
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = gerarInteiro(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')
function gerarInteiro(min, max) {
    const valor = Math.random() * (max - min) + min //Math.random gera 0 e 1
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = gerarInteiro(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')
const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write('Fala aNônimo!\n') // Saída padrão, assim como console.log
    process.exit() // Encerrando processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //Entrada padrão e on equivale ao enter, assim como input no python
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit
    })
}
// sem promise...
const http = require('http')

const getTurma = (letra, callback) => { // callback é a resposta
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, resposta => {
        let resultado = ''

        resposta.on('data', dados => { // evento de recebimento dos dados
            resultado += dados
        })

        resposta.on('end', () => { // evento de finalização do processo ('end')
            callback(JSON.parse(resultado)) // aki ele gera um array de verdade, passando para o parametro callback como resposta
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
    console.log(nomes)
})


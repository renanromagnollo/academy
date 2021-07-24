// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = ''
    
            resposta.on('data', dados => {
                resultado += dados
            })
    
            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
                
            })
        })
    })  
}

// Método estilo callback, implementando o promise (não recomendado)
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C ${a.nome}`))
            console.log(nomes)
        })
    })
})

// Método Promise
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // Promise all retorna depois de todos os outros promisses estiverem prontos
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))
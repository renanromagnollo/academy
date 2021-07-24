const fs = require('fs') // Importando módulo File System, responsável por leitura de arquivo e diretório

const caminho = __dirname + '/arquivo.json' //__dirname corresponde ao diretório atual

//sincrono (o sistema espera finalizar)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono (continua o programa antes de terminar)
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Ler JSON diretamente usando require, já transformando em um obj
const config = require('./arquivo.json') // Aqui tem que colocar a extensão .json pq sem a etensão, le por padrão .js
console.log(config.db)

// Lendo conteúdo de diretório, que retorna como um Array
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
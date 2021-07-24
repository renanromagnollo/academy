const fs = require('fs') // Importando módulo File System

const produto = {
    nome: 'Celular',
    preco: 1200.00,
    desconto: 0.15
}


// Método para escrita
//Primeiro parametro é o arquivo a ser gerado, segundo o conteúdo e terceiro o callback de erro
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(err || 'Arquivo salvo!')// CAso o erro seja nulo, dará false e sendo falso executará o 'Arquivo salvo'
})
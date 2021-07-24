const moduloA = require('./moduleA')
const moduloB = require('./moduleB')
const moduloC = require('pastaA') // Aqui não precisa colocar o nome do arquivo pq o arquivo index dentro da pasta já é o padrão.

console.log(moduloA.ola)

console.log(moduloB.bomDia)

console.log(moduloC.ola)
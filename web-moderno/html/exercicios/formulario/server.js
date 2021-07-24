const express = require('express')
const app = express()

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (requisicao, resposta) =>{
    console.log(requisicao.body)
    resposta.send(<h1>Parabéns</h1>)
})

app.post('/usuarios/:id', (requisicao, resposta) =>{
    console.log(requisicao.params.id) // retorna o id da url
    console.log(requisicao.body)
    resposta.send(<h1>Parabéns</h1>)
})

app.listen(3003)
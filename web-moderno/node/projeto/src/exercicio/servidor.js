const porta = 3030

const express = require('express')
const bodyParser = require('body-parser')

const bancoDeDados = require('./bancoDeDados')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/blog', (req, res) => {
    res.send(bancoDeDados.getPosts())
})

app.get('/blog/:id', (req, res) => {
    res.send(bancoDeDados.getPost(req.params.id))
})

app.post('/blog', (req, res) => {
    const post = bancoDeDados.savePost({
        titulo: req.body.titulo,
        texto: req.body.texto
    })
    res.send(post)
})

app.put('/blog/:id', (req, res) => {
    const post = bancoDeDados.savePost({
        id: req.params.id,
        titulo: req.body.titulo,
        texto: req.body.texto
    })
    res.send(post)
})

app.delete('/blog/:id', (req, res) => {
    const post = bancoDeDados.delPost(req.params.id)
    res.send(post)
})

app.listen(porta, _ => console.log(`Servidor on port: ${porta}`))
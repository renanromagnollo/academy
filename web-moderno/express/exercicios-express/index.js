const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Renan'))

app.use((req, res) => {
    // res.send('Se não declarar a url, essa requisição será executada em qq URL')
    // res.send('<h1>Aceita tb retornar um HTML</h1>')
    
    // res.json({ // retorna tb um json de um objeto
    //     name: 'notebook',
    //     price: 1899.00,
    //     year: 2021
    // })

    // res.json([ // retornando json de um array de objetos
    //     {
    //         id: 12,
    //         nome: 'Renan',
    //         idade: 35
    //     },
    //     {
    //         id: 13,
    //         nome: 'Sabrina',
    //         idade: 33
    //     }
    // ])
    // res.json({
    //     pessoas: [
    //         {nome: "Renan", idade: 35},
    //         {nome: "Sabrina", idade: 33}    
    //     ],
    //     estadoCivil: 'Juntado',
    //     anosJuntos: 10,
    //     qntFilhos: 1
    // })
    res.json([
        { 
            casal1: {
                pessoas: [
                    {nome: "Renan", idade: 35},
                    {nome: "Sabrina", idade: 33}    
                ]},
                estadoCivil: 'Juntado',
                anosJuntos: 10,
                qntFilhos: 1
        },
        { 
            casal2: {
                pessoas: [
                    {nome: "Marcelo", idade: 36},
                    {nome: "Dayane", idade: 33}    
                ]},
                estadoCivil: 'Casados',
                anosJuntos: 15,
                qntFilhos: 2
        }
    ])
})

app.listen(3000, _ => console.log('Backend executando...'))
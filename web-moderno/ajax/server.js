const bodyParser = require('body-parser') //Responsável pela interpretação, fazendo parser
const express = require('express') // 

const app = express()

app.use(express.static('.')) // Dentro da pasta atual ('.'), sirva os arquivos estáticos (que são os htmls, etc)
app.use(bodyParser.urlencoded({ extended: true })) // Se vier algum dado de submit, aqui transforma em objeto
app.use(bodyParser.json()) // Transforma json em objeto

//app.get('/teste', (req, res) => res.send('Ok')) // Quando chegar uma requisição do tipo GET no /test, execute a função passando require response como parametro e devolvendo resposta ok

const multer = require('multer') // uploader

const storage = multer.diskStorage({ // define o salvamento do arquivo 
    destination: function(req, file, callback) {
        callback(null, './upload') // definindo para salvar arquivo na pasta upload
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage}).single('arquivo')

app.post('/upload', (req, res) => { // rota
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt()
})

app.listen(8080, () => console.log('Executando...')) // Startando o servidor na porta 8080


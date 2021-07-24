const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const {data} = response
    // const menorSalario = (menor, atual) => menor < atual
    const chPobre = data.filter(a => a.pais=='China')
                    .filter(s => s.genero ==='F')
                    .reduce((f, fa) => f.salario < fa.salario ? f : fa)
    console.log(chPobre)
})
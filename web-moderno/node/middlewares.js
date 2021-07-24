const passo1 = (conteudo, next) => {
    conteudo.valor1 = 'mid1'
    next()
}
const passo2 = (conteudo, next) => {
    conteudo.valor2 = 'mid2'
    next()
}

const passo3 = conteudo => conteudo.valor3 = 'mid3'

const exec = (conteudo, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](conteudo, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const conteudo = {}
exec(conteudo, passo1, passo2, passo3)
console.log(conteudo)
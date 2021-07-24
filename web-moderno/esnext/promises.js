function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // Parametros de solucao e erro (resolve = solução, reject = erro)
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('!!!'))
    .catch(erro => console.log(erro))
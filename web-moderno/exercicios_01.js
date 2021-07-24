// Ex 01

const funcao = (n1, n2) => {
    return console.log(`Soma: ${n1+n2}\nSub: ${n1-n2}\nMulti: ${n1*n2}\nDiv: ${n1/n2}`)
}

funcao(200, 100)

// ou... 

((n1=300, n2=100) => {
    return console.log(`Soma: ${n1+n2}\nSub: ${n1-n2}\nMulti: ${n1*n2}\nDiv: ${n1/n2}`)
})()

// ---------------------------------------------------

// Ex 02:

const triangulo = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado2 === lado3) return console.log('Triângulo Equilátero')
    else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) return console.log('Triângulo Isósceles')
    else return console.log('Triângulo Escaleno')
}

triangulo(10, 1, 10)
triangulo(10, 10, 10)
triangulo(10, 20, 11)

// Ex 03:

function conta(n1, n2) {
    return console.log(n1 ** n2)
}

// Ex 04:

function dividir(n1, n2) {
    return console.log(n1 % n2)
}

dividir (3,2)

// Ex 05:
function valor(n1, n2) {
    return console.log('R$'+(n1 + n2).toFixed(2).replace('.', ','))
}

valor(0.1, 0.2)
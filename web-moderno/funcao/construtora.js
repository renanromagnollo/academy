function Carro(velocidadeMaxima = 200, delta = 5) { // A função funciona como um molde para a criação de um obj
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidade = function () {
        return velocidadeAtual
    }

    // metodo privado vc coloca como const ou let
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidade())

const ferrari = new Carro(350, 20)
ferrari.acelerar()

//------------------------------------
// FORMAS DE DECLARAR FUNÇÃO

// function declaration --> Essa é a única forma que dá para chamar a função no código e a função ser declarada depois.
function soma(x, y) {
    return x + y
}

// functio expression
const sub = function (x, y) {
    return x - y
}

// named function expresssion
const mult = function mult(x, y) {
    return x * y
}


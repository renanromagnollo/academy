// Função sem retorno
function somar(a, b){
    console.log(a + b)
}

somar(3, 4)


// Função com retorno

function soma(a, b=0){
    return a + b
}

// Função anonima
const imprimir = function(a, b){
    console.log(a + b)
}

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

// retorno implícito
const subtracao = (a, b) => a - b

//função parecida com objeto

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
obj3.exec()
 
// ----------------------------
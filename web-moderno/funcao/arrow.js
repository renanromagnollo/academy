//funçao normal
let dobro = function (a) {
    return 2 * a
}

//arrow comum
dobro = (a) => {
    return 2 * a
}

// arrow reduzida sem o bloco faz o return explícito
dobro = a => 2 * a

// função sem parametros
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // função arrow sem parametro
ola = _ => 'Olá' // Possui parametro ignorável

//------------------------------------------------

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // aqui o this refere sempre ao this da Pessoa por estar dentro de uma função arrow
        console.log(this.idade)
    }, 1000)
}

new Pessoa // instanciando sem precisar criar variável
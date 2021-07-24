const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar.bind(pessoa) // Serve para amarrar o this ao obj
falar()

//-------------------------------------------------------------------------

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    },/*ou coloca = .bind(this) ao invés de criar uma variável relacionando o this*/ 1000)
}
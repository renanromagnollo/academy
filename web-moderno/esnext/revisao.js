//Descructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)

// Arrow Function
const soma = (a, b) => a + b // Se usar 2 parametros, tem q usar parenteses (a, b). Se for 1, não
console.log(soma(2, 3))

const soma2 = (a, b) => { // Se usar corpo, tem que declarar o return
    return a, b
}

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
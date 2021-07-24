const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //retorna as chaves
console.log(Object.values(pessoa)) // retorna os valores
console.log(Object.entries(pessoa)) // retorna array com chave e valor

Object.entries(pessoa).forEach(([chave, valor]) => { // destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',  {
    enumerable: false, // chave disponível?
    writable: false,
    value: '01/02/1986'
})

// Object.assign
const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c:3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Serve para pegar atributos de outros obj e inserir no obj de destino


const a = 1
const b = 2

const obj1 = {a, b, c} // Isso é o mesmo que {a: a, b: b, c: c}

//----------------------------------------------------

const nomeAtr = 'nota'
const valorAtr = 7.87

const obj3 = {}
obj3[nomeAtr] = valorAtr // Isso vai gerar um nome de um atributo através do nome da variável e o valor tb

const obj4 = {[nomeAtr]: valorAtr} // assim tb

// ----------------------------------------------------------

const obj5 = {
    funcao1: function() { // forma tradicional
        // ...
    },
    // ou...
    funcao2() { // forma reduzida
        // ...
    }
}
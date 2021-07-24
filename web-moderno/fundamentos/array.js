const valores = [7.7, 8.9, 6.3]
console.log(valores[0], valores[2])
console.log(valores[6]) //retornará "undefined"

valores[4] = 10 //coloca o conteúdo no índex correspondente [4]

console.log(valores.length) // retorna a quantidade

valores.push(21, 'Renan') // correspondente ao append no python

valores.pop() //retira o último valor

delete valores[0] //deleta determinado valor do índice informado
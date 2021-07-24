const escola = "Coder"

console.log(escola.charAt(4)) //charAt retorna o caracter do índice indicado
console.log(escola.charCodeAt(3)) // pega o código na tabela ASC
console.log(escola.indexOf('3')) // pega o índice correspondente ao conteúdo
console.log(escola.substring(1)) //pega do índice correspondente pra frente (recorte)
console.log(escola.substring(0, 3)) // recorte ao índice anterior ao anterior ao último valor declarado (3)
console.log('Escola'.concat(escola).concat("!")) || console.log('Escola' + escola + "!")//concatenação
console.log(escola.replace(3, 'e')) // substituição
console.log('Renan,Arthur,Sabrina'.split(',')) //separa e gera um array, assim como em python

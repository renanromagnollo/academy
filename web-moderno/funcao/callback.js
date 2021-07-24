const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

/*forEach de um array, correspondende a um for x in do Python
Nesse caso, ele está passando uma função como paramentro, que tem outros 2 parametros.
Daí ele irá pegar o índice e o conteúdo. Se for passado só uma fução direta, ele pega só o conteúdo*/
fabricantes.forEach(imprimir)

fabricantes.forEach(conteudo => console.log(conteudo))

//------------------------------------------

/**/

const notas = [7.7, 8.9,6.0, 5.4]

const notasBaixas = notas.filter((nota) => nota < 7) // método do array para filtrar parametro determinado
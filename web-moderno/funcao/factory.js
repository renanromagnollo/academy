/* Factory é uma função que retorna um novo objeto ou função
 * Serve como fábrica de objetos
*/

// Factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        Sobrenome: 'Silva'
    }
}

// Criando produto com parâmetros

function criarProduto(nome, preco) {
    return {
        nome, // É opcional colocar como n: nome, por ex.
        preco,
        desconto: preco / 2
    }
}
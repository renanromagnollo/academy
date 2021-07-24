//Função com parâmetro opcional
function soma() {
    let soma = 0
    for (i in arguments) { // Corresponde ao *args do Python, mas ele não precisa ser declarado no lugar do paramentro.
        soma += arguments[i]
    }
}
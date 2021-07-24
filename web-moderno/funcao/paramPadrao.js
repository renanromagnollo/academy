// estratégia 1 para gerar valor padrão
function soma1(a, b, c) { // não funciona para o número 0
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    a = 1 in arguments ? b : 1
    c = isNAN(c) ? 1 : c
    return a + b + c
}


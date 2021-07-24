const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // O break não funciona em if. Ele irá sair do laço mais próximo que ele suporta (No caso, o for).
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in muns) {
    if (y == 5) {
        continue // O continue irá interromper o fluxo da condição declarada no if e irá direto para o for novamente
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { // Criou um rótulo chamado externo
    for (b in nums) {
        if(a == 2 && b ==3) break externo // Declarando o for que o break sairá (externo). Com isso, ele não sairá do for mais próximo.
        console.log(`Par = ${a}, ${b}`)
    }
}
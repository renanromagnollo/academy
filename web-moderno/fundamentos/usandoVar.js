// variável var só é global ou local, dentro da função

var numero = 1

{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
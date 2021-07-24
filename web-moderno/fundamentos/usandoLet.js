// let tem scopo global, de função e de bloco. Enquanto o var só tem global e de função.



var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', fora)
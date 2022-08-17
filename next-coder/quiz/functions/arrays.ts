export function empabalhar(elementos: any[]): any[] {
    return elementos
        .map(valor => ({valor, aleatorio: Math.random()})) // o atributo valor do objeto é igual valor: valor
        .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
        .map(obj => obj.valor)
}
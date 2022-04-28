export default class Porta {
    #numero
    #selecionada
    #comPresente
    
    constructor(numero, selecionada=false, comPresente=false)

    get numero() {
        return this.#numero
    }
}
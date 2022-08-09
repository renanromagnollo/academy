export default class ModeloBall {
    #tamanho: number
    #clicada: boolean

    constructor(tamanho=1, clicada=false) {
        this.#tamanho = tamanho
        this.#clicada = clicada
    }

    get tamanho() {
        return this.#tamanho
    }

    get clicada() {
        return this.#clicada
    }

    alterarSelecao() {
        return new ModeloBall(this.tamanho, !this.clicada)
    }
    



}
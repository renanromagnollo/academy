export default class DoorModel {
    #numero: number
    #selecionada: boolean
    #temPresente: boolean
    #aberta: boolean

    constructor(numero: number, selecionada=false, temPresente=false, aberta=false) {
        this.#numero = numero
        this.#selecionada = selecionada
        this.#temPresente = temPresente
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }
    get selecionada() {
        return this.#selecionada
    }
    get temPresente() {
        return this.#temPresente
    }
    get aberta() {
        return this.#aberta
    }
    get fechada() {
        return !this.aberta
    }

    alterarSelecao() {
        const selecao = !this.selecionada
        return new DoorModel(this.numero, selecao, this.temPresente, this.aberta)
    }
    deSelecionar() {
        const selecao = false
        return new DoorModel(this.numero, selecao, this.temPresente, this.aberta)
    }
    abrir() {
        const aberta = true
        return new DoorModel(this.numero, this.selecionada, this.temPresente, aberta)
    }

}
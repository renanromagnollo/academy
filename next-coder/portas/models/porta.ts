export default class PortaModel {
    #numero: number
    #selecionada: boolean
    #temPresente: boolean
    #aberta: boolean
    
    constructor(numero: number, selecionada=false, temPresente=false, aberta=false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }
    get temPresente() {
        return this.#temPresente
    }
    get selecionada() {
        return this.#selecionada
    }
    get aberta() {
        return this.#aberta
    }

    desselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, selecionada, this.temPresente, this.aberta)
    }

    alterarSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, selecionada, this.temPresente, this.aberta)
    }
    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.selecionada, this.temPresente, aberta)
    }
}
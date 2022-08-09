export default class CircleModel {
    #border: boolean
    #inside: boolean

    constructor(border=true, inside=true){
        this.#border = border
        this.#inside = inside
    }

    get border() {
        return this.#border
    }
    get inside() {
        return this.#inside
    }

    changeBorder() {
        const border = !this.border
        return new CircleModel(border, this.inside)
    }

    changeInside() {
        const inside = !this.inside
        return new CircleModel(this.border, inside)
    }
}
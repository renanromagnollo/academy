import React, {Component} from  'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 1,
        passo: this.props.numeroPasso || 5
    }

    //ou com construtor
    /*
        constructor(props)
        super(props)

        this.state = {
            numero: props.numeroInicial
        }
    */

    somar = _ => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }
    
    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <h3>Número inicial = {this.state.numero}</h3>
                <PassoForm passo={10}/>
                <Botoes incrementar={this.inc} decrementar={this.dec} setPasso={this.setPasso}/>
            </div>
        )
    }
}

export default Contador
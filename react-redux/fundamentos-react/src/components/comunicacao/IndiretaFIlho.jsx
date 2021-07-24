import React from 'react'

export default props => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={ _ => props.quandoClicar('João', 33, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}
import React from 'react'

export default props => {
    <button 
        className={`
            button
            ${props.oparation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}   
        `}>
        {props.label}
        onClick={e => props.click && props.click(props.label)}
    </button>
}
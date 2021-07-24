import React, { cloneElement } from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
/* EX 1:
    return (
        <div>
            <FamiliaMembro nome='Renan' sobrenome = {props.sobrenome}/>
            <FamiliaMembro nome='Arthur' {...props}/>
            <FamiliaMembro nome='Sabrina' sobrenome='Xavier'/>
        </div>
    )*/

    return (
        <div>
            {props.children.map((child, index) => {
                return cloneElement(child, {...props, key: index})
            })}
        </div>
        )
}


    
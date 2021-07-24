import React from 'react'

//export default (min, max) => {
//    let rand = Math.flor(Math.random() * max) + min
//    return <h2> { rand } </h2>
//}

export default props => {
    let rand = Math.floor(Math.random()*props.max)+props.min
    return (
    <h1> { rand } </h1>
    )
}
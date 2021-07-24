import './card.css'
import React from 'react'

export default (props) => {
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }
    const titleCard = props.Title.toUpperCase()
    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'>{titleCard}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}
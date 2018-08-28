import React from 'react';


const Card = props => {

    return (
        <div className='card' onClick={props.onClick}>
            <p>{props.card.title}</p>
            <p>{props.card.content}</p>
        </div>
    )
}

export default Card
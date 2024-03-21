import React from 'react'

const Pill = ({ image, text, onClick }) => {
    return (
        <div>
            <span className='user-pill' onClick={onClick}>
                <img src={image} alt={text}>
                </img>
                <span>{text} &times;</span>
            </span>
        </div>
    )
}

export default Pill
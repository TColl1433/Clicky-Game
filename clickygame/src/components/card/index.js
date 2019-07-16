import React from 'react'
import PropTypes from 'prop-types'

import './style.css'


//destructuring some props, by destructuring we can get access to the props from App.js
export default function Card({
    handleClick,
    id,
    type,
    flipped,
    height,
    width }) {
    return (
        <div
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width,
                height
            }}
            onClick={() => handleClick(id)}
        >
            <div className="flipper">
                <img alt=""
                    style={{
                        height,
                        width,
                    }}
                    className={flipped ? 'front' : 'back'}
                    src={flipped ? `/img/${type}.jpg` : `/img/backofcard.jpg`}
                />
            </div>
        </div>
    )
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,

    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
}
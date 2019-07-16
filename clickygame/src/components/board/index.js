import React from 'react'
import PropTypes from 'prop-types' 

import Card from '../card'

//below we are destructuring our properties Board({})
export default function Board({
    cards,
    flipped,
    handleClick
  }) {
    return React.createElement("div", {
      className: "board"
    }, cards.map(card => React.createElement(Card, {
      key: card.id,
      id: card.id,
      type: card.type,
      width: card.width,
      height: card.height,
      flipped: flipped.includes(card.id),
      handleClick: () => handleClick(card.id)
    })));
  }

Board.propTypes = {
    card: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}



//use effect can be used in order to similuate a component did mount, component will mount etc.
import React, { useState, useEffect } from 'react'
import Board from './components/board'

import initializeDeck from './deck'


export default function App() {

  const [cards, setCards] = useState([])
  //below is a getter method 
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    setCards(initializeDeck())
  }, [])


//Below is the function declaration for this component
  const handleClick = (id) => setFlipped([...flipped, id])
  return (
    <div>
      <h1>Memory Game</h1>
      <h1>Can you remember where the cards are?</h1>
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  )
}








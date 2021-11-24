import React, {useState} from 'react'
import './Card.css'

export function Card({children, addActiveCard, index, listActiveCards}) {

  const [stylesCard, setStylesCard] = useState('Card Card-roll')

  const flipCard = () => {
    addActiveCard(index)
    setStylesCard('Card')
    setTimeout(() => {
      if (listActiveCards.length > 1) { ///------
        setStylesCard('Card')
      } else {
        setStylesCard('Card Card-roll')
      }
    }, 1500)
  }

  return (
    <div className={stylesCard} onClick={flipCard}>
      {children}
    </div>
  )
}
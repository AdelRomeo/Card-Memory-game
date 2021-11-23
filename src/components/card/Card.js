import React, {useState} from 'react'
import './Card.css'

export function Card({getId, index, showCard, children}) {

  const [styleCard, setStyleCard] = useState('Card')

  const cardRoll = () => {
    getId(index)
    setStyleCard('Card Card-roll')
    if (!showCard){
      const timer = setTimeout(()=>{
        setStyleCard('Card')
        clearTimeout(timer)
      }, 1500)
    }
  }

  return(
    <div className={styleCard} onClick={cardRoll}>
      {children}
    </div>
  )
}
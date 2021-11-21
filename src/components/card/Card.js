import React, {useState} from 'react'
import './Card.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

export function Card({getId, index, showCard}) {

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
      <FontAwesomeIcon icon={faCoffee}/>
    </div>
  )
}
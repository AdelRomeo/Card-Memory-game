import React from 'react'
import './Card.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Card({isFlip, onFlipCard, index, icon}) {

  return (
    <div className='card' onClick={()=>{onFlipCard(index)}}>
      <div className={`flipper ${isFlip ? 'card-reverse' : ''}`}>
        {/*<div className='front'/>*/}
        <FontAwesomeIcon icon={icon} className='back'/>
      </div>
    </div>
  )
}
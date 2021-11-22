import React, {useState} from 'react'
import './Card.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, fa0} from '@fortawesome/free-solid-svg-icons'

export function Card({cardRoll, index, children}) {

  return(
    <div className='Card Card-roll' onClick={()=>cardRoll(index)}>
      {children}
    </div>
  )
}
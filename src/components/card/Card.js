import React, {useState} from 'react'
import './Card.css'

export function Card({children}) {

  return(
    <div className='Card'>
      {children}
    </div>
  )
}
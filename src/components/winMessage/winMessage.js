import React from 'react'
import './winMessage.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from '@fortawesome/free-solid-svg-icons'

export function WinMessage({closeMessage}) {

  return (
    <div className='win-message' onClick={() => closeMessage()}>
      <div className='win-message-container'>
        <p className='win-message-title'>Congratulation! You win in the game</p>
        <FontAwesomeIcon className='win-message-new_game' icon={faClose}/>
      </div>
    </div>
  )
}
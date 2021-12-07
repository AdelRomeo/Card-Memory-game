import React from 'react'
import './winMessage.css'

export function WinMessage({closeMessage}) {

  return (
    <div className='win-message' onClick={() => closeMessage()}>
      <div className='win-message-container'>
        <p className='win-message-title'>Congratulation! You win in the game</p>
        <button className='win-message_new-game'>Click for the new game</button>
      </div>
    </div>
  )
}
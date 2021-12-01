import React from 'react'
import './winMessage.css'
export function WinMessage({reloadGame}) {

  return (
    <div className='win-message'>
      <div className='win-message-container'>
        <p className='win-message-title'>Congratulation! You win in the game</p>
        <button className='win-message-try_again' onClick={()=>reloadGame(false)}>try again</button>
      </div>
    </div>
  )
}
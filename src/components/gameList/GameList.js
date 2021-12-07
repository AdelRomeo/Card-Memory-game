import React from 'react'
import './GameList.css'
import easyGame from '../../media/images/game3.jpg'
import mediumGame from '../../media/images/game2.jpg'
import hardGame from '../../media/images/game1.jpg'

export function GameList({selectGame}) {

  return (
    <div className='game-list'>
      <h2 className='game-list_title'>Select the game</h2>
      <button className='game-list_selector' onClick={()=>selectGame(3)}>
        <img src={easyGame} width='200px' className='game-list_img' height='100px' alt='game 3'/>
      </button>
      <button className='game-list_selector' onClick={()=>selectGame(6)}>
        <img src={mediumGame} width='200px' className='game-list_img' height='100px' alt='game 2'/>
      </button>
      <button className='game-list_selector' onClick={()=>selectGame(10)}>
        <img src={hardGame} width='200px' className='game-list_img' height='100px' alt='game 1'/>
      </button>
    </div>
  )
}
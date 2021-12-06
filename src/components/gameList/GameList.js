import React from 'react'
import './GameList.css'
import easyGame from '../../media/images/game1.jpg'
import mediumGame from '../../media/images/game2.jpg'
import hardGame from '../../media/images/game3.jpg'

export function GameList() {

  const clickBtn = () => {
    console.log('click')
  }

  return (
    <div className='game-list'>
      <button className='game-list_selector' onClick={clickBtn}><img src={easyGame} width='200px' height='100px' alt='game 1'/></button>
      <button className='game-list_selector'><img src={mediumGame} width='200px' height='100px' alt='game 2'/></button>
      <button className='game-list_selector'><img src={hardGame} width='200px' height='100px' alt='game 3'/></button>
    </div>
  )
}
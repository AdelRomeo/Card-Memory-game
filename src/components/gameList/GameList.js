import React, {useState} from 'react'
import './GameList.css'
import easyGame from '../../media/images/game3.jpg'
import mediumGame from '../../media/images/game2.jpg'
import hardGame from '../../media/images/game1.jpg'
import {faArrowCircleDown, faCircleArrowUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function GameList({selectGame}) {
  //отображение списка выбора игр
  const [showListGame, setShowListGame] = useState(['game-list'])

  return (
    <div className={showListGame.join(' ')}>
      <FontAwesomeIcon icon={faCircleArrowUp} className='game-list_arrow-up fa-2x' onClick={()=>{setShowListGame(['game-list'])}}/>
      <h2 className='game-list_title'>Select the game</h2>
      <button className='game-list_selector' onClick={()=>{selectGame(3); setShowListGame(['game-list'])}}>
        <img src={easyGame} width='200px' className='game-list_img' height='100px' alt='game 3'/>
      </button>
      <button className='game-list_selector' onClick={()=>{selectGame(6); setShowListGame(['game-list'])}}>
        <img src={mediumGame} width='200px' className='game-list_img' height='100px' alt='game 2'/>
      </button>
      <button className='game-list_selector' onClick={()=>{selectGame(10); setShowListGame(['game-list'])}}>
        <img src={hardGame} width='200px' className='game-list_img' height='100px' alt='game 1'/>
      </button>
      <FontAwesomeIcon icon={faArrowCircleDown} className='game-list_arrow-down fa-2x' onClick={()=>setShowListGame(['game-list', 'game-list_show'])}/>
    </div>
  )
}
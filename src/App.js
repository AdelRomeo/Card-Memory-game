import React, {useEffect, useState} from 'react'
import './App.css'
import WebFont from 'webfontloader'
import {CardContainer} from './components/cardContainer/CardContainer'
import {Rules} from './components/rules/Rules'
import {WinMessage} from './components/winMessage/winMessage'
import {GameList} from './components/gameList/GameList'

function App() {

  //получение информации о победе в игре и показ поздравительного сообщения
  const [winGame, setWinGame] = useState(false)
  //перезагрузка игры
  const [newGame, setNewGame] = useState(false)
  //количество карточек для игры
  const [lengthGame, setLengthGame] = useState(null)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Amatic SC']
      }
    })
  }, [])

  //получение информации о пебеде в игре
  const onHandlerStatusGame = (status) => {
    setWinGame(status)
  }

  //закрытие поздравительного сообщения
  const onHandlerReloadGame = () => {
    setNewGame(newGame => !newGame)
    setWinGame(winGame => !winGame)
  }

  //выбор игры
  const selectGame = (lvl) => {
    setLengthGame(lvl)
  }

  return (
    <div className='App'>
      <GameList selectGame={selectGame}/>
      <div>
        <Rules/>
        <h1 className='title'>Card memory game</h1>
        <CardContainer lengthGame={lengthGame} newGame={newGame} getWinStatus={onHandlerStatusGame}/>
        {winGame ? <WinMessage closeMessage={onHandlerReloadGame}/> : null}
      </div>
    </div>
  );
}

export default App;

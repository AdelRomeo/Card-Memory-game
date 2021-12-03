import React, {useEffect, useState} from 'react'
import './App.css'
import WebFont from 'webfontloader'
import {CardContainer} from './components/cardContainer/CardContainer'
import {Rules} from './components/rules/Rules'
import {WinMessage} from './components/winMessage/winMessage'

function App() {

  //получение информации о победе в игре и показ поздравительного сообщения
  const [winGame, setWinGame] = useState(false)
  //перезагрузка игры
  const [newGame, setNewGame] = useState(false)

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

  return (
    <div className='App'>
      <Rules/>
      <h1 className='title'>Card memory game</h1>
      <CardContainer newGame={newGame} getWinStatus={onHandlerStatusGame}/>
      {winGame ? <WinMessage closeMessage={onHandlerReloadGame}/> : null}
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react'
import './App.css'
import WebFont from 'webfontloader'
import {CardContainer} from './components/cardContainer/CardContainer'
import {Rules} from './components/rules/Rules'
import {WinMessage} from './components/winMessage/winMessage'

function App() {

  //получение информации о пебеде в игре и показ поздравительного сообщения
  const [statusGame, setStatusGame] = useState(false)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Amatic SC']
      }
    })
  }, [])


  const onHandlerStatusGame = (status) => {
    setStatusGame(status)
  }

  const onHandlerReloadGame = (status) => {
    setStatusGame(status)
  }

  return (
    <div className='App'>
      <Rules/>
      <h1 className='title'>Card memory game</h1>
      <CardContainer statusGame={statusGame} getWinStatus={onHandlerStatusGame}/>
      {statusGame ? <WinMessage reloadGame={onHandlerReloadGame}/> : null}
    </div>
  );
}

export default App;

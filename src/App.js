import React, {useEffect} from 'react'
import './App.css'
import WebFont from 'webfontloader'
import {CardContainer} from './components/cardContainer/CardContainer'
import {Rules} from './components/rules/Rules'

function App() {

  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Amatic SC']
      }
    })
  }, [])

  return (
    <div className='App'>
      <Rules/>
      <h1 className='title'>Card memory game</h1>
      <CardContainer/>
    </div>
  );
}

export default App;

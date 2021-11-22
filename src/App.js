import React from 'react'
import './App.css'
import {Wrapper} from './components/wrapper/Wrapper'
import CardState from "./context/card/cardState";

function App() {
  return (
    <CardState>
      <div className='App'>
        <Wrapper/>
      </div>
    </CardState>
  )
}

export default App

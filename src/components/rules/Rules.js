import React, {useState} from 'react'
import './Rules.css'

export function Rules() {
  //показ правил игры
  const [showRules, setShowRules] = useState(false)

  const toggleVisibleRules = () => {
    setShowRules(true)
    setTimeout(()=> {
      setShowRules(false)
    }, 2500)
  }

  return (
    <div className='rules-container' style={{top: showRules ? '0px' : '-57px'}}>
      <p className='rules-descr'>Click on cards to find duplicate images</p>
      <button className='rules-show' onClick={toggleVisibleRules}>rules</button>
    </div>
  )
}
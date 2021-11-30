import React, {useState} from 'react'
import './Rules.css'

export function Rules() {
  //показ правил игры
  const [showRules, setShowRules] = useState(false)

  console.log(showRules)

  return (
    <div className='rules-container' style={{top: showRules ? '0px' : '-57px'}}>
      <p className='rules-descr'>Click on cards to find duplicate images</p>
      <button className='rules-show' onClick={()=>setShowRules(showRules => !showRules)}>rules</button>
    </div>
  )
}
import React, {useState} from 'react'
import './Wrapper.css'
import {Card} from '../card/Card'

export function Wrapper() {

  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  const [idCard, setIdCard] = useState('')

  const [showCard, setShowCard] = useState(false)

  const getId = (id) => {
    if (id === idCard){
      //проверка на одинаковость карт
      setShowCard(true)
    }
    setIdCard(id)
  }

  return (
    <article className='Wrapper'>
      {arr.map((item, index) => {
        return (
          <Card index={index} getId={getId} showCard={showCard}/>
        )
      })}
    </article>
  )
}
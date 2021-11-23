import React, {useEffect, useState} from 'react'
import './Wrapper.css'
import {Card} from '../card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons'

export function Wrapper() {

  const arr = [fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 ]

  const [idCard, setIdCard] = useState(1)

  const [showCard, setShowCard] = useState(false)

  const [listCard, setListCard] = useState(arr)

  const getId = (id) => {
    if (id === idCard) {
      //проверка на одинаковость карт
      //setShowCard(true)
      console.log('yes')
    }
    setIdCard(id)
    console.log(id)
  }

  //случайный порядок карточек
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  //генерация карточек
  const createCardList = () => {
    const shuffledArray = [...shuffleArray(arr), ...shuffleArray(arr)]
    setListCard(shuffledArray)
  }

  useEffect(() => {
    createCardList()
  }, [])

  return (
    <article className='Wrapper'>
      {listCard.map((item, index) => {
        return (
          <Card index={item} getId={getId} showCard={showCard}>
            <FontAwesomeIcon icon={listCard[index]}/>
          </Card>
        )
      })}
    </article>
  )
}
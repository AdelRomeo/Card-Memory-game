import React, {useEffect, useState} from 'react'
import './Wrapper.css'
import {Card} from '../card/Card'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9} from '@fortawesome/free-solid-svg-icons'

export function Wrapper() {
  //картинки
  const arr = [fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9]
  //перемешанный массив картинок
  const [listCards, setListCards] = useState(arr)
  //выбранные картинки
  const [listActiveCards, setListActiveCards] = useState([])
  //результат карточек
  const [resultsFlips, setResultsFlip] = useState(false)

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
    const shuffledArray = [...shuffleArray(arr)]
    setListCards(shuffledArray)
  }

  useEffect(() => {
    createCardList()
  }, [])

  // useEffect(() => {
  //   getCheckSumCard(listActiveCards)
  // }, [listActiveCards])

  const addActiveCard = (id) => {
    setListActiveCards(listActiveCards => listActiveCards.concat(id))
  }

  const getCheckSumCard = (list) => {
    let check = false
    if (list.length > 1) {
      if (list[0] === list[1]) {
        check = true
      }
    }
    return check
  }

  return (
    <article className='Wrapper'>
      {getCheckSumCard(listActiveCards)}
      {listCards.map((item, index) => {
        return (
          <Card key={index} addActiveCard={addActiveCard} index={item} listActiveCards={listActiveCards}>
            <FontAwesomeIcon icon={listCards[index]}/>
          </Card>
        )
      })}
    </article>
  )
}
import React, {useEffect, useState} from 'react'
import './Wrapper.css'
import {Card} from '../card/Card'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9} from '@fortawesome/free-solid-svg-icons'

export function Wrapper() {

  let cls = 'Card'

  const arr = [fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9]

  const [listCard, setListCard] = useState(arr)

  const [activeCards, setActiveCards] = useState([])

  const flipCard = (idCard) => {

    if (activeCards.length < 2) {
      setActiveCards(activeCards.concat(idCard))

      if (activeCards.length === 1) {
        setTimeout(() => {
          setActiveCards([])
        }, 700)
      }
    }

    console.log(activeCards)
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
    const shuffledArray = [...shuffleArray(arr)]
    setListCard(shuffledArray)
  }

  useEffect(() => {
    createCardList()
  }, [])

  return (
    <article className='Wrapper'>
      {listCard.map((item, index) => {
        return (
          <div
            className={cls}
            key={index}
            onClick={() => {
              flipCard(item)
            }}
          >
            <FontAwesomeIcon icon={listCard[index]}/>
          </div>
        )
      })}
    </article>
  )
}
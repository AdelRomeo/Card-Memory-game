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
  //открытые карточки
  const [activeCards, setActiveCard] = useState([])
  //список совпавших карточек
  const [openCards, setOpenCards] = useState([])

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

  useEffect(()=>{
    //первая карточка по которой кликнули
    let firstActiveCard = listCards[activeCards[0]]
    //вторая карточка по которой кликнули
    let secondActiveCard = listCards[activeCards[1]]

    //если карточек 2 и они одинаковые
    if (secondActiveCard && firstActiveCard === secondActiveCard) {
      //добавляем в активные карточки первую карточку по которой кликнули
      setOpenCards(openCards => [...openCards, firstActiveCard, secondActiveCard])
    }

    //если 2 или больше карточек - очищаем список отрытых карточек
    if (activeCards.length > 1) {
      setTimeout(()=>{
        setActiveCard([])
      }, 1500)
    }

  } , [activeCards])

  //клик по карточке
  const onHandleCard = (idCard) => {
    //добавляем в список открытых карточек, карточку по которой кликнули
    setActiveCard(activeCards => [...activeCards, idCard])
    console.log(openCards)
    if (openCards.length === listCards.length) {
      console.log('game over')
    }
  }

  return (
    <article className='Wrapper'>
      {listCards.map((item, i) => {
        let isFlip = false
        //если карточка та по которой кликнули
        if (activeCards.includes(i)) isFlip = true
        //если карточка из списка совпаших
        if (openCards.includes(item)) isFlip = true
          return (
            <div
              key={i}
              className={`Card ${isFlip ? 'Card-roll' : ''}`}
              onClick={() => onHandleCard(i)}
            >
              <FontAwesomeIcon icon={listCards[i]}/>
            </div>
          )
      })}
    </article>
  )
}
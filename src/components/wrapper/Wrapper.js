import React, {useContext} from 'react'
import './Wrapper.css'
import {Card} from '../card/Card'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9} from '@fortawesome/free-solid-svg-icons'
import CardContext from '../../context/card/cardContext'

export function Wrapper() {

  let arrInit = [fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9]

  const {cardRoll, firstCard, secondCard} = useContext(CardContext)

  //случайный порядок массива
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  // useEffect(() => {
  //   //проверяем совпадение карточек
  //   if (firstCard !== null && secondCard !== null && firstCard === secondCard && choiceFirstCard) {
  //     console.log('совпало')
  //     console.log(choiceFirstCard)
  //     //сбрасываем состояния карточек
  //     setFirstCard(null)
  //     setSecondCard(null)
  //   }
  // }, [])


  return (
    <article className='Wrapper'>
      {shuffle(arrInit.map((item, index) => {
        return (
          <Card index={index} cardRoll={cardRoll}>
            <FontAwesomeIcon icon={arrInit[index]}/>
          </Card>
        )
      }))}
    </article>
  )
}
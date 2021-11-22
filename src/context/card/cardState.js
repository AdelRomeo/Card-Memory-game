import React, {useReducer} from 'react'
import CardContext from './cardContext'
import cardReducer from './cardReducer'

export default function CardState({children}) {

  const initialState = {
    firstCard: null,
    secondCard: null,
    choiceFirstCard: true
  }

  //клик по карточке
  const cardRoll = (id) => {

    //если первая карта
    if (choiceFirstCard) {
      //запоминаем id первой каточки
      setFirstCard(id)
      //переключаемся на вторую карточку
      setChoiceFirstCard(false)
      console.log('first')
    }
    //если вторая карта
    else {
      //запоминаем id второй карточки
      setSecondCard(id)
      //переключаем на первую карточку
      setChoiceFirstCard(true)
      console.log('sec')
    }
  }

  const setFirstCard = (id) => {
    dispatch({
      type: 'FIRST_CARD', id
    })
  }

  const setSecondCard = (id) => {
    dispatch({
      type: 'SECOND_CARD', id
    })
  }

  const setChoiceFirstCard = (payload) => {
    dispatch({
      type: 'CHOICE_FIRST_CARD', payload
    })
  }

  const [state, dispatch] = useReducer(cardReducer, initialState)

  const {firstCard, secondCard, choiceFirstCard} = state

  return (
    <CardContext.Provider value={{cardRoll, firstCard, secondCard}}>
      {children}
    </CardContext.Provider>
  )
}
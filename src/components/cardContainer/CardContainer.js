import React, {useEffect, useState} from 'react'
import './CardContainer.css'
import {Card} from '../card/Card'
import {faCat, faDog, faCrow, faDove, faDragon, faFish, faFrog, faHippo, faHorse, faKiwiBird} from '@fortawesome/free-solid-svg-icons'
import {Backdrop} from '../backdrop/Backdrop'

export function CardContainer({getWinStatus, newGame}) {
  //картинки
  const arrImg = [faCat, faDog, faCrow, faDove, faDragon, faFish, faFrog, faHippo, faHorse, faKiwiBird, faCat, faDog, faCrow, faDove, faDragon, faFish, faFrog, faHippo, faHorse, faKiwiBird]
  //перемешанный массив картинок
  const [listCards, setListCards] = useState(arrImg)
  //открытые карточки
  const [activeCards, setActiveCard] = useState([])
  //список совпавших карточек
  const [openCards, setOpenCards] = useState([])
  //запрет лишних кликов на время открытия двух краточек
  const [showBackdrop, setShowBackdrop] = useState(false)

  let backdropStyles = {
    zIndex: 2,
    opacity: 0.3
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
    const shuffledArray = [...shuffleArray(arrImg)]
    setListCards(shuffledArray)
  }

  useEffect(() => {
    //очистка списка открытых карточек
    setActiveCard([])
    //очистка списка совпавших карточек
    setOpenCards([])
    setTimeout(()=> {
      //загрузка новых карточек
      createCardList()
    }, 1000)
  }, [newGame])


  useEffect(() => {
    //первая карточка по которой кликнули
    let firstActiveCard = listCards[activeCards[0]]
    //вторая карточка по которой кликнули
    let secondActiveCard = listCards[activeCards[1]]

    //если не одна и та же карточка
    if (activeCards[0] !== activeCards[1]) {
      //если карточек 2 и они одинаковые
      if (secondActiveCard && firstActiveCard === secondActiveCard) {
        //добавляем в активные карточки первую карточку по которой кликнули
        setOpenCards(openCards => [...openCards, firstActiveCard, secondActiveCard])
      } else {
      }
    }

    //если 2 или больше карточек - очищаем список отрытых карточек
    if (activeCards.length > 1) {
      //блокировка блокировка кликов
      setShowBackdrop(true)
      setTimeout(() => {
        //разблокировка кликов
        setShowBackdrop(false)
        //очистка списка открытых карточек
        setActiveCard([])
      }, 1500)
    }
  }, [activeCards])

  useEffect(() => {
    if (openCards.length === listCards.length) {
      //победа в игре
      getWinStatus(true)
    }
  }, [openCards])

  //клик по карточке
  const onHandleCard = (idCard) => {
    //добавляем в список открытых карточек, карточку по которой кликнули
    setActiveCard(activeCards => [...activeCards, idCard])
  }

  return (
    <article className='wrapper'>
      {listCards.map((item, i) => {
        let isFlip = false
        //если карточка та по которой кликнули
        if (activeCards.includes(i)) isFlip = true
        //если карточка из списка совпаших
        if (openCards.includes(item)) isFlip = true
        return (
          <Card
            key={i}
            isFlip={isFlip}
            onFlipCard={() => onHandleCard(i)}
            index={i}
            icon={listCards[i]}
          />
        )
      })}
      <Backdrop style={showBackdrop ? backdropStyles : null}/>
    </article>
  )
}
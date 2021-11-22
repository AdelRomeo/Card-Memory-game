export default function cardReducer(state, action) {
  switch (action.type) {
    case 'FIRST_CARD':
      return {...state, firstCard: action.id}
    case 'SECOND_CARD':
      return {...state, secondCard: action.id}
    case 'CHOICE_FIRST_CARD':
      return {...state, choiceFirstCard: action.payload}
    default:
      return state
  }
}
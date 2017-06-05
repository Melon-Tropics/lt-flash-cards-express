import { connect } from 'react-redux'
import { CardDeck } from '../components/CardDeck/CardDeck'
import {cancelCard, showAnswer, showDeck, nextCard } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    currentDeck : state.deck,
    currentCard : state.currentCard,
    cardControl : state.cardControl,
    deckControl : state.deckControl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDeck: (deckName, currentDeck) => {
      dispatch(showDeck(deckName, currentDeck))
    },

    nextCard: (deckControl, deck) => {
      dispatch(nextCard(deckControl, deck))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDeck)

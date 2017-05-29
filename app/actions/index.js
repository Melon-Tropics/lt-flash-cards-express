const randomId = require('random-id')

import { languagesFetch } from '../fetchHelpers/languagesFetch'
import { translationFetch } from '../fetchHelpers/translationFetch'
import { definitionsFetch } from '../fetchHelpers/definitionsFetch'
import { oedScrubber } from '../fetchHelpers/oedScrubber'

export const loadLanguageList = () => {
  return (dispatch) => {
    return languagesFetch()
    .then(responseObject => {
      return dispatch(addLanguages(responseObject.data.languages))
    })
  }
}

export const translateWord = (inputWord, targetLanguage) => {
  return (dispatch) => {
    return translationFetch(inputWord, targetLanguage)
    .then(responseObject => {
      return dispatch(createCard(inputWord.q, responseObject.data.translations[0].translatedText))
    })
  }
}

export const defineWord = (inputWord) => {
  return (dispatch) => {
    return definitionsFetch(inputWord)
    .then(responseObject => {
      return dispatch(createCard(inputWord, oedScrubber(responseObject)))
    })
  }
}

export const addLanguages = (languageSet) => {
  return {
    type: 'ADD_LANGUAGES',
    languageSet
  }
}

export const selectLanguage = (language) => {
  return {
    type: 'SELECT_LANGUAGE',
    language
  }
}

export const createCard = (inputWord, translatedWord) => {
  return {
    type: 'CREATE_CARD',
    inputWord,
    translatedWord,
    id: randomId(3)
  }
}

export const cancelCard = (card) => {
  return {
    type: 'CANCEL_CARD',
    card
  }
}

export const addCard = (deckName, card) => {
  return {
    type: 'ADD_CARD',
    deckName,
  }
}

export const deleteCard = (deckName, cardId) => {
  return {
    type: 'DELETE_CARD',
    deckName,
    cardId
  }
}

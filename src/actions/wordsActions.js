import {WORDS_ACTION_CONSTANTS} from '../constants/wordsActionConstants';

export const fetchWordsAction = () => ({
    type: WORDS_ACTION_CONSTANTS.FETCH_WORDS_ACTION
})

export const showWordsAction = (words) => ({
    type: WORDS_ACTION_CONSTANTS.SHOW_WORDS_ACTION,
    words
})

export const showWordsErrorAction = (error) => ({
    type: WORDS_ACTION_CONSTANTS.SHOW_WORDS_ERROR_ACTION,
    error
})
 
export const setSelectWordAction = (word) => ({
    type: WORDS_ACTION_CONSTANTS.SET_SELECTED_WORDS_ACTION,
    word
})
 
export const selectLanguageAction = (lang) => ({
    type: WORDS_ACTION_CONSTANTS.SELECT_LANGUAGE_ACTION,
    lang
})
 
export const selectLetterAction = (letter) => ({
    type: WORDS_ACTION_CONSTANTS.SELECT_LETTER_ACTION,
    letter
})

export const searchWordAction = (word, lang) => ({
    type: WORDS_ACTION_CONSTANTS.SEARCH_WORD_ACTION,
    word,
    lang
})
 
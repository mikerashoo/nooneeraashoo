import { WORDS_ACTION_CONSTANTS } from "../constants/wordsActionConstants"

const INITIAL_STATE = {
    loading: false,
    words: [],
    error: null,
    selectedLanguage: 'kaffi',
    selectedLetter: 'A',
    selectedWord: null
}
export const wordsReducer = (state = INITIAL_STATE, action) => { 
    switch(action.type){
        case WORDS_ACTION_CONSTANTS.FETCH_WORDS_ACTION: 
            return {
                ...state,
                loading: true
            };

        case WORDS_ACTION_CONSTANTS.SHOW_WORDS_ACTION: 
            let _selected_word = action.words[0] ? action.words[0] : null;
            return {
                ...state,
                loading: false,
                words: action.words, 
                selectedWord: _selected_word
            }
        case WORDS_ACTION_CONSTANTS.SHOW_WORDS_ERROR_ACTION:
            return {
                ...state,
                loading: false,
                error: action.error
            } 

        case WORDS_ACTION_CONSTANTS.SET_SELECTED_WORDS_ACTION: 
            return {
                ...state,
                loading: false,
                selectedWord: action.word 
            }
            
        case WORDS_ACTION_CONSTANTS.SELECT_LANGUAGE_ACTION:
            return {
                ...state,
                loading: false,
                selectedLanguage: action.lang 
            }
            
        case WORDS_ACTION_CONSTANTS.SELECT_LETTER_ACTION:
            return {
                ...state,
                loading: false,
                selectedLetter: action.letter 
            }
            
        case WORDS_ACTION_CONSTANTS.SEARCH_WORD_ACTION: 
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default wordsReducer;
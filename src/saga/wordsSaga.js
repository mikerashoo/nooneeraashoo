import { call, put, takeEvery, takeLatest } from 'redux-saga/effects' 
import { showWordsAction } from '../actions/wordsActions';
import {fetchWordsApi} from '../api/wordsApi';
import { WORDS_ACTION_CONSTANTS } from '../constants/wordsActionConstants';

function* fetchWordsSaga(action) {
    try {
        const sql = 'SELECT * FROM words LIMIT 100';  
        const wordsData = yield call(fetchWordsApi, sql);  
        yield put (showWordsAction(wordsData)); 
    } catch (e) {
        yield put({type: WORDS_ACTION_CONSTANTS.SHOW_WORDS_ERROR_ACTION, error: e.message});
    }
} 


function* selectLetterSaga(action) {
    try {
        const sql = `SELECT * FROM words where kafinoonoo LIKE '${action.letter}%' LIMIT 100`;  
        const wordsData = yield call(fetchWordsApi, sql);  
        yield put (showWordsAction(wordsData)); 
    } catch (e) {
        yield put({type: WORDS_ACTION_CONSTANTS.SHOW_WORDS_ERROR_ACTION, error: e.message});
    }
} 

function* searchWordSaga(action){
    try {
        let search = action.word;
        let column = 'kafinoonoo';
        switch (action.lang) {
            case 'amh':
                column = 'amharic'
                break;
            case 'eng':
                column = 'english'
                break;
        
            default:
                break;
        }
        const sql = `SELECT * FROM words where ${column} LIKE '${search}%' LIMIT 100`;  
        console.log('sql == > ', sql);
        const wordsData = yield call(fetchWordsApi, sql);  
        yield put (showWordsAction(wordsData)); 
    } catch (error) {
        
    }
}

function* wordsSaga() {
  yield takeEvery(WORDS_ACTION_CONSTANTS.FETCH_WORDS_ACTION, fetchWordsSaga);
  yield takeEvery(WORDS_ACTION_CONSTANTS.SEARCH_WORD_ACTION, searchWordSaga);
  yield takeEvery(WORDS_ACTION_CONSTANTS.SELECT_LETTER_ACTION, selectLetterSaga);
}

export default wordsSaga;

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects' 
import { fetchCommunicationsAction,setCommunicationsAction, setCommunicationsErrorAction, setCommunicationCategoriesAction, setCommunicationCategoriesErrorAction, setDatesAction, setDatesErrorAction } from '../actions/educationAction'; 
import {EDUCATION_ACTIONS} from '../constants/educationActionConstants';
import { runDatesApi, runFetchApi } from '../api/wordsApi'

function* fetchCommunicationCategoriesSaga(action) {
    try {  
        let sql = "SELECT * FROM communication_categories"; 
        const data = yield call(runFetchApi, sql);    
        yield put (setCommunicationCategoriesAction(data)); 
      
    } catch (e) {
        console.log(e);
        yield put (setCommunicationCategoriesErrorAction("error fetching categories")); 
    }
} 

function* fetchCommunicationsSaga(action) {
    try {  
        let sql = `SELECT * FROM communications where category_id = ${action.category_id}`; 
        const data = yield call(runFetchApi, sql);    
        console.log(sql);

        yield put (setCommunicationsAction(data)); 
    } catch (e) { 
        yield put (setCommunicationsErrorAction("error fetching communications")); 
    }
} 

function* fetchDatesSaga(action) {
    try {  
        let sql = `SELECT * FROM dates`; 
        const _data = yield call(runDatesApi, sql);    
        console.log('_data on saga', _data); 
        yield put (setDatesAction(_data)); 
    } catch (e) { 
        yield put (setDatesErrorAction("error fetching dates")); 
    }
} 
 
 
function* educationSaga() {
	yield takeEvery(EDUCATION_ACTIONS.FETCH_COMMUNICATION_CATEGORIES_ACTION, fetchCommunicationCategoriesSaga);  
	yield takeEvery(EDUCATION_ACTIONS.FETCH_COMMUNICATIONS_ACTION, fetchCommunicationsSaga);  
	yield takeEvery(EDUCATION_ACTIONS.FETCH_DATES_ACTION, fetchDatesSaga);  
}

export default educationSaga;

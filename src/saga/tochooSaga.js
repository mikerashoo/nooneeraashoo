import { call, put, takeEvery, takeLatest } from 'redux-saga/effects' 
import { showTochoosAction, showTochoosErrorAction, setTochooAction } from '../actions/tochooAction'; 
import {TOCHOO_ACTION_CONSTANTS} from '../constants/tochooActionConstants';
import {tochoos} from '../assets/files/tochoos'

function* fetchTochoosSaga(action) {
    try {  
        yield put (showTochoosAction(tochoos)); 
    } catch (e) {
        yield put (showTochoosErrorAction("Tochoona'o aala")); 
    }
} 

function* selectTochoosSaga(action) {
    try {  
        yield put (setTochooAction(action.tochoo)); 
    } catch (e) {
        yield put (showTochoosErrorAction("Tochoona'o aala")); 
    }
} 

function* tochoosSaga() {
  yield takeEvery(TOCHOO_ACTION_CONSTANTS.FETCH_TOCHOOS_ACTION, fetchTochoosSaga); 
  yield takeEvery(TOCHOO_ACTION_CONSTANTS.SELECT_TOCHOO_ACTION, selectTochoosSaga); 
}

export default tochoosSaga;

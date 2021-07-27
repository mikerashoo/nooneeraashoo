import { all } from "redux-saga/effects";   
import wordsSaga from "./wordsSaga";
import tochoosSaga from "./tochooSaga"; 
import educationSaga from "./educationSaga"; 

function* rootSaga () {
    yield all([ 
        wordsSaga(), 
        tochoosSaga(),
        educationSaga()
    ]);
}

export default rootSaga;
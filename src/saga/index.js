import { all } from "redux-saga/effects";   
import wordsSaga from "./wordsSaga";
import tochoosSaga from "./tochooSaga";

function* rootSaga () {
    yield all([ 
        wordsSaga(), 
        tochoosSaga()
    ]);
}

export default rootSaga;
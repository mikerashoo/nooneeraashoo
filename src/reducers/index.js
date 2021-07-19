import { combineReducers } from 'redux';

import wordsReducer from './wordsReducer';
import tochooReducer from './tochooReducer';

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  words: wordsReducer,
  tochooState: tochooReducer
});

export default rootReducer;

import { combineReducers } from 'redux';

import wordsReducer from './wordsReducer';
import tochooReducer from './tochooReducer';
import educationReducer from './educationReducer';
 
const rootReducer = combineReducers({
  words: wordsReducer,
  tochooState: tochooReducer,
  educationState: educationReducer
});

export default rootReducer;

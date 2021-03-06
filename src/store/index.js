import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'
import rootReducer from '../reducers'
 
const sagaMiddleware = createSagaMiddleware()

// redux sagas is a middleware that we apply to the store
export const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store;
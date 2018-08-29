import 'rxjs'
import { createHashHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import initialState from './initialState'
import initialDispatch from './initialDispatch'
import rootReducer from './reducer'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epic'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createHashHistory()

const epicMiddleware = createEpicMiddleware()

const enhancers = []
const middlewares = [
  routerMiddleware(history),
  epicMiddleware
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composed = composeEnhancers(
  applyMiddleware(...middlewares),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composed
)

epicMiddleware.run(rootEpic)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
}

initialDispatch(store.dispatch)

export default store

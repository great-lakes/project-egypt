import 'rxjs'
import { createStore, applyMiddleware, compose } from 'redux'
import initialState from './initialState'
import initialDispatch from './initialDispatch'
import rootReducer from './reducer'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epic'

const epicMiddleware = createEpicMiddleware()

const enhancers = []
const middlewares = [
  epicMiddleware
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composed = composeEnhancers(
  applyMiddleware(...middlewares),
  ...enhancers
)

const store = createStore(
  rootReducer,
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

import { createStore, applyMiddleware, compose } from 'redux'
import initialState from './initialState'
import initialDispatch from './initialDispatch'
import rootReducer from './reducer'

const enhancers = []
const middleware = [
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

console.log(rootReducer)
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
}

initialDispatch(store.dispatch)

export default store

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import store, { history } from './store'
import AppComponent from './components/layout/App'
import { ConnectedRouter } from 'connected-react-router'
import registerServiceWorker from './registerServiceWorker'

const App = () => (<Provider store={store}>
  <ConnectedRouter history={history}>
    <AppComponent />
  </ConnectedRouter>
</Provider>)

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./components/layout/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  })
}

registerServiceWorker()

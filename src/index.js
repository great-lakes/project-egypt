import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import store from './store'
import AppComponent from './components/App'
import registerServiceWorker from './registerServiceWorker'

const App = () => (<Provider store={store}>
  <AppComponent />
</Provider>)

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, document.getElementById('root'))
  })
}

registerServiceWorker()

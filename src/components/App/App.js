import React, { Component } from 'react'
import './App.css'
import NavBar from '../NavBar'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar title='Device Simulator' />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App

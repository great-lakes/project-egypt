import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from '../NavBar'
import Home from '../Home'
import Generators from '../Generators'
import AddHub from '../AddHub'
import NotFound from '../NotFound'
import AddDevice from '../AddDevice'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router hashType='noslash'>
          <div>
            <NavBar title='Device Simulator' />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/generators' exact component={Generators} />
              <Route path='/addhub' exact component={AddHub} />
              <Route path='/adddevice' exact component={AddDevice} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App

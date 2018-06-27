import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from '../NavBar'
import Home from '../Home'
import Generators from '../Generators'
import AddHub from '../AddHub'
import NotFound from '../NotFound'
import HubCreation from '../HubCreation'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar title='Device Simulator' />
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/generators' exact component={Generators} />
            <Route path='/addhub' exact component={AddHub} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <HubCreation />
      </div>
    )
  }
}

export default App

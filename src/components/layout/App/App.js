import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from '../NavBar'
import Home from '../Home'
import ViewGenerators from '../../generator/ViewGenerators'
import AddHub from '../../hub/AddHub'
import NotFound from '../NotFound'
import AddDevice from '../../device/AddDevice'
import ViewHub from '../../hub/ViewHub'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div>
          <NavBar title='Device Simulator' />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/generators' exact component={ViewGenerators} />
            <Route path='/add-hub' exact component={AddHub} />
            <Route path='/add-device' exact component={AddDevice} />
            <Route path='/hubs/:name' component={ViewHub} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App

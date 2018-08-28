import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

class Home extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='Home'>
        <p>Welcome to IotHub/EventHub Simulator</p>
        <p><Link className='control' to='/add-hub'>Add Hub</Link></p>
      </div>
    )
  }
}

export default Home

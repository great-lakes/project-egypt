import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.hubs = [{key: 0, value: 'no hubs'}]
  }

  render () {
    const {hubs} = this.props
    return (
      <nav className='NavBar-nav'>
        <h1 className='NavBar-title'>{this.props.title}</h1>
        <span>
          <Link className='control generator-manage' to='/generators'>Generators</Link>
          <select className='control' value={this.state.value} onChange={this.handleChange}>
            {hubs.map((x, i) => <option key={`${x.name}-${i}`}>{x.name}</option>)}
          </select>
          <Link className='control hub-manage' to='/add-hub'>Add Hub</Link>
        </span>
      </nav>
    )
  }
}

export default NavBar

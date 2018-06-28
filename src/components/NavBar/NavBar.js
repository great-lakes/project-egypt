import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.data = [{key: 0, value: 'coconut'}, {key: 1, value: 'banana'}, {key: 2, value: 'lime'}]
  }

  handleChange (event) {
    // this.setState({value: event.target.value})
  }

  render () {
    return (
      <nav className='NavBar-nav'>
        <h1 className='NavBar-title'>{this.props.title}</h1>
        <span>
          <Link className='control' to='/generators'>Generators</Link>
          <select className='control' value={this.state.value} onChange={this.handleChange}>
            {this.data.map(x => <option key={x.key}>{x.value}</option>)}
          </select>
          <Link className='control' to='/addhub'>Add Hub</Link>
        </span>
      </nav>
    )
  }
}

export default NavBar

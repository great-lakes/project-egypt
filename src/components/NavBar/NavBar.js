import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.title = props.title
    this.state = {value: ''}
    this.data = [{key: 0, value: 'coconut'}, {key: 1, value: 'banana'}, {key: 2, value: 'lime'}]
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <nav className='NavBar-nav'>
        <h1 className='NavBar-title'>{this.title}</h1>
        <span>
          <button className='control'>Generators</button>
          <select className='control' value={this.state.value} onChange={this.handleChange}>
            {this.data.map(x => <option key={x.key}>{x.value}</option>)}
          </select>
          <button className='control'>Add Hub</button>
        </span>
      </nav>
    )
  }
}

export default NavBar

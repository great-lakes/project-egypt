import React from 'react'
import './Header.css'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.title = props.title
    this.state = {value: ''}
    this.data = ['coconut', 'banana', 'lime']
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <header className='Header-header'>
        <h1 className='Header-title'>{this.title}</h1>
        <span>
          <button className='control'>Generators</button>
          <select className='control' value={this.state.value} onChange={this.handleChange}>
            {this.data.map(x => <option>{x}</option>)}
          </select>
          <button className='control'>Add Hub</button>
        </span>
      </header>
    )
  }
}

export default Header

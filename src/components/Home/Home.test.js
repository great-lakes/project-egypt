/* global it, describe */
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

// Tests of the functionality of the GUI implementation
describe('Frontend GUI Tests', function () {
  // This is the included test from stubbed code
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

/* global it, describe */
import React from 'react'
import ReactDOM from 'react-dom'
import AddHub from './AddHub'

// Tests of the functionality of the GUI implementation
describe('Frontend GUI Tests', function () {
  // This is the included test from stubbed code
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddHub />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

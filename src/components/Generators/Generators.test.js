/* global it, describe */
import React from 'react'
import ReactDOM from 'react-dom'
import Generators from './Generators'

// Tests of the functionality of the GUI implementation
describe('Frontend GUI Tests', function () {
  // This is the included test from stubbed code
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Generators />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

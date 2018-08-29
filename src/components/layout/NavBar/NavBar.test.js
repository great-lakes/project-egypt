/* global it, describe */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import ShallowRenderer from 'react-test-renderer/shallow'
import NavBar from './NavBar'

// Tests of the functionality of the GUI implementation
describe('Frontend GUI Tests', function () {
  // This is the included test from stubbed code
  it('renders without crashing', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<NavBar hubs={[]} />)
    const result = renderer.getRenderOutput()

    expect(result.type).toBe('nav')
  })
})

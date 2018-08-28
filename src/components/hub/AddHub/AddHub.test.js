/* global it, expect, describe */
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import AddHub from './AddHub'

// Tests of the functionality of the GUI implementation
describe('Genertators View GUI Tests', function () {
  // This is the included test from stubbed code
  it('renders without crashing', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<AddHub />)
    const result = renderer.getRenderOutput()

    expect(result.type).toBe('div')
  })
})

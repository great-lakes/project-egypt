/* global it, expect, describe */
import React from 'react'
// import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from './App'
import sum from './Test.examples' // import Sum from the app test file (Sum is a function)

// Example tests that can be used to build off of
// For a full getting started guide see http://jestjs.io/docs/en/getting-started
describe('Example Tests', function () {
  // Below is a sample test that calls the SUM function from a
  // imported file , this can be used as a starting point for unit tests
  it('A simple example unit test (sums two numbers)', () => {
    // Expect is a global function that takes a function to test as a parameter
    // Expect provides member functions that perform condition checks (for example toEqual,toBeLessThan)
    // For full expect definition see http://jestjs.io/docs/en/expect
    expect(sum(1, 1)).toEqual(2)
  })
})

// Tests of the functionality of the GUI implementation
describe('Frontend GUI Tests', function () {
  // This is the included test from stubbed code
  it('renders without crashing', () => {
    // const div = document.createElement('div')
    // ReactDOM.render(<App />, div)
    // ReactDOM.unmountComponentAtNode(div)

    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    const result = renderer.getRenderOutput()

    expect(result.type).toBe('div')
  })
})

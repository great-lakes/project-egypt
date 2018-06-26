/* global it, expect */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import sum from './Test.examples' // import Sum from the app test file (Sum is a function)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// Below is a sample test that calls the SUM function from a
// imported file , this can be used as a starting point for unit tests
it('A simple example test (sums two numbers)', () => {
  // Expect is a global function that takes a function to test as a parameter
  // Expect provides member functions that perform condition checks (for example toEqual,toBeLessThan)
  // For full expect definition see http://jestjs.io/docs/en/expect
  expect(sum(1, 1)).toEqual(2)
})

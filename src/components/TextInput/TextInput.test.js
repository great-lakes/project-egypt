/* global test, expect */
import React from 'react'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import TextInput from './TextInput'

test('TextInput changes', () => {
  // Render a textinput in the document

  const renderer = TestRenderer.create(<TextInput />)
  const instance = renderer.root

  const textinput = instance.findByType(TextInput)

  expect(textinput.value).toEqual(undefined)

  textinput.value = 'On'
  ReactTestUtils.Simulate.change(textinput)
  ReactTestUtils.Simulate.keyDown(textinput, {key: 'Enter', keyCode: 13, which: 13})

  expect(textinput.value).toEqual('On')
})

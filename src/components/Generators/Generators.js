import React from 'react'
import './Generators.css'

import AvailableGenerators from '../AvailableGenerators'

class Generators extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='grid'>
        <div id='availablegenerators'>
          <AvailableGenerators />
        </div>
        <div id='addcustomgenerator'>
          <h1>IM A PLACE HOLDER</h1>
        </div>
        <div id='generatorinfo'>
          <h1>I TOO AM A PLACE HOLDER</h1>
        </div>
      </div>
    )
  }
}

export default Generators

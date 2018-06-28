import React from 'react'
import './Generators.css'

import AvailableGenerators from '../AvailableGenerators'
import GeneratorInfo from '../GeneratorInfo'
import CustomGenerator from '../CustomGenerator'

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
          <CustomGenerator />
        </div>
        <div id='generatorinfo'>
          <GeneratorInfo />
        </div>
      </div>
    )
  }
}

export default Generators

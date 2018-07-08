import React from 'react'
import './AddHub.css'

import HubCreation from '../HubCreation'

class AddHub extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='grid'>
        <div id='addahub'>
          <HubCreation />
        </div>
      </div>
    )
  }
}

export default AddHub

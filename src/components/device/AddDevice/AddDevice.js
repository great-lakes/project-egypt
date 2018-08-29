import React from 'react'
import './AddDevice.css'

import DeviceCreation from '../DeviceCreation'

class AddDevice extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='grid'>
        <div id='addadevice'>
          <DeviceCreation />
        </div>
      </div>
    )
  }
}

export default AddDevice

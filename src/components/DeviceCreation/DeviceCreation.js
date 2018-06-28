import React from 'react'
import TextInput from '../TextInput'
import './DeviceCreation.css'

function onClickFunc (hostname, cs, onSubmitFromProp) {
  return () => {
    onSubmitFromProp(hostname, cs)
  }
}

const DeviceCreation = (props) => (<div>
  <h1 className='DeviceCreation-title'>Add a Device</h1>
  <TextInput
    labelName='Name'
    value={props.deviceName}
    onValueChange={props.onDeviceNameChange}
  />
  <TextInput
    labelName='Frequency (ms)'
    value={props.ms}
    onValueChange={props.onMSChange}
  />
  <TextInput
    labelName='Device Connection String'
    value={props.cs}
    onValueChange={props.onCSChange}
  />
  <button type='submit' action='' onClick={onClickFunc(props.deviceName, props.cs, props.onSubmitClick)}>Add a Device</button>
</div>)

export default DeviceCreation

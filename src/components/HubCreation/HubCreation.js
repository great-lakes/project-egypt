import React from 'react'
import TextInput from '../TextInput'
import './HubCreation.css'

function onClickFunc (hostname, cs, onSubmitFromProp) {
  return () => {
    onSubmitFromProp(hostname, cs)
  }
}

const HubCreation = (props) => (<div>
  <h1 className='HubCreation-title'>Add a Hub</h1>
  <TextInput
    labelName='Host Name'
    value={props.hostname}
    onValueChange={props.onHostNameChange}
  />
  <TextInput
    labelName='Connection String'
    value={props.cs}
    onValueChange={props.onCSChange}
  />
  <button type='submit' action='' onClick={onClickFunc(props.hostname, props.cs, props.onSubmitClick)}>Add a Hub</button>
</div>)

export default HubCreation

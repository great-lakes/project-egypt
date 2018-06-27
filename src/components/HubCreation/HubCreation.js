import React from 'react'
import TextInput from '../TextInput'

function onClickFunc (hostname, cs, onSubmitFromProp) {
  return () => {
    onSubmitFromProp(hostname, cs)
  }
}

const HubCreation = (props) => (<div>
  <TextInput
    value={props.hostname}
    onValueChange={props.onHostNameChange}
  />
  <TextInput
    value={props.cs}
    onValueChange={props.onCSChange}
  />
  <button type='submit' action='' onClick={onClickFunc(props.hostname, props.cs, props.onSubmitClick)}>Add a Hub</button>
</div>)

export default HubCreation

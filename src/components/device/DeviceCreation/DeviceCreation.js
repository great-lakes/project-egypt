import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './DeviceCreation.css'

const DeviceCreationFormComponent = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor='deviceName'>Device Name: </label>
      <Field name='deviceName' component='input' type='text' />
    </div>
    <div>
      <label htmlFor='eventFrequency'>Event Frequency</label>
      <Field name='eventFrequency' component='input' type='text' placeholder='in ms' />
    </div>
    <div>
      <label htmlFor='deviceCs'>Device Connection String: </label>
      <Field name='deviceCs' component='input' type='text' />
    </div>
  </form>
)

const DeviceCreationForm = reduxForm({
  form: 'createSimDevice'
})(DeviceCreationFormComponent)

const DeviceCreation = ({onSubmit}) => (<div>
  <h1 className='DeviceCreation-title'>Add a Device</h1>
  <DeviceCreationForm onSubmit={onSubmit} />
</div>)

export default DeviceCreation

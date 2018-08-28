import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './HubCreation.css'

const HubCreationFormComponent = props => {
  const { handleSubmit } = props
  return (<form onSubmit={handleSubmit}>
    <div>
      <label htmlFor='eventhubName'>EventHub-Compatible Name: </label>
      <Field name='eventhubName' component='input' type='text' />
    </div>
    <div>
      <label htmlFor='eventhubCs'>EventHub-Compatible Connection String: </label>
      <Field name='eventhubCs' component='input' type='text' />
    </div>
    <button type='submit'>Add a Hub</button>
  </form>)
}

const HubCreationForm = reduxForm({
  form: 'createHubConnection'
})(HubCreationFormComponent)

const HubCreation = ({ onSubmitForm }) => (<div>
  <h1 className='HubCreation-title'>Create a Hub Connection</h1>
  <HubCreationForm onSubmit={onSubmitForm} />
</div>)

export default HubCreation

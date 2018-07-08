import { combineReducers } from 'redux'
import { reducer as hubs } from '../modules/hubs'
import { reducer as hubCreationForm } from '../modules/hubCreationForm'
import { reducer as devices } from '../modules/devices'

export default combineReducers({
  hubs,
  hubCreationForm,
  devices
})

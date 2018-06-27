import { combineReducers } from 'redux'
import { reducer as hubs } from '../modules/hubs'
import { reducer as hubCreationForm } from '../modules/hubCreationForm'

export default combineReducers({
  hubs,
  hubCreationForm
})

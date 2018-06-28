import { combineReducers } from 'redux'
import { reducer as hubs } from '../modules/hubs'
import { reducer as hubCreationForm } from '../modules/hubCreationForm'
import { reducer as generators } from '../modules/generators'

export default combineReducers({
  hubs,
  hubCreationForm,
  generators
})

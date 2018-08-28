import { combineReducers } from 'redux'
import { reducer as hubs } from '../modules/hubs'
import { reducer as devices } from '../modules/devices'
import { reducer as generators } from '../modules/generators'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  hubs,
  devices,
  generators,
  form: formReducer
})

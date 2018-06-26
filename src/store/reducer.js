import { combineReducers } from 'redux'
import iothubReducer from '../modules/hubs/iothubcreation.reducer.js'

export default combineReducers({
  iothubs: iothubReducer
})

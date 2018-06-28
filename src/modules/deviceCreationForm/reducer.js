import {SET_DEVICENAME, SET_CONNECTION_STRING, SET_FREQUENCY} from './actions'
const initialState = {
  deviceName: '',
  cs: '',
  ms: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICENAME:
      return {
        ...state,
        deviceName: action.payload
      }
    case SET_CONNECTION_STRING:
      return {
        ...state,
        cs: action.payload
      }
    case SET_FREQUENCY:
      return {
        ...state,
        ms: action.payload
      }
    default : return state
  }
}

import {SET_HOSTNAME, SET_CONNECTION_STRING} from './actions'
const initialState = {
  name: '',
  cs: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HOSTNAME:
      return {
        ...state,
        hostname: action.payload
      }
    case SET_CONNECTION_STRING:
      return {
        ...state,
        cs: action.payload
      }
    default : return state
  }
}

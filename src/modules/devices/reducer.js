import {ADD_DEVICE_CONNECTION} from './actions'
const initialState = []

/**
 * @return array
 */

export default (state = initialState, action) => {
  if (action.type === ADD_DEVICE_CONNECTION) {
    return [
      ...state,
      action.payload
    ]
  }
  return state
}

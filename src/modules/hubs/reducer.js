import { ADD_HUB_CONNECTION, SET_HUB_CONNECTIONS } from './actions'
const initialState = []

/**
 * @return array
 */

export default (state = initialState, action) => {
  if (action.type === ADD_HUB_CONNECTION) {
    return [
      ...state,
      action.payload
    ]
  }

  if (action.type === SET_HUB_CONNECTIONS) {
    return action.payload
  }

  return state
}

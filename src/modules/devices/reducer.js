import {ADD_DEVICE_CONNECTION} from './actions'
const initialState = []

/**
 * @return array
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEVICE_CONNECTION:
      return [
        ...state,
        action.payload
      ]
    default : return state
  }
}

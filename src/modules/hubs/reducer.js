import {ADD_HUB_CONNECTION} from './actions'
const initialState = []

/**
 * @return array
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HUB_CONNECTION:
      return [
        ...state,
        action.payload
      ]
    default : return state
  }
}

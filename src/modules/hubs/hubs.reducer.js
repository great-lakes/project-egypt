import * as constants from './iothubcreation.action.js'
const initialState = {
  name: ''
}

/**
 * @return array
 */
function hostname (state = initialState, action) {
  switch (action.type) {
    case constants.HOSTNAME:
      return {
        ...state,
        name: action.payload.name
      }
  }
}

export default hostname

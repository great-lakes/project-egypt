import {ADD_HUB_CONNECTION} from 'modules/hubs/actions'

const connectToIoTHub = store => next => sction => {
  let result = next(action)
  if (action.type === ADD_HUB_CONNECTION) {

  }
}

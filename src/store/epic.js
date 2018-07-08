import { combineEpics } from 'redux-observable'
import { epics as devices } from '../modules/devices'

export default combineEpics(
  ...devices
)

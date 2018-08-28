import { combineEpics } from 'redux-observable'
import { epics as devices } from '../modules/devices'
import { epics as hubs } from '../modules/hubs'
import initialEpics from './initialEpics'

export default combineEpics(
  ...initialEpics,
  ...hubs,
  ...devices
)

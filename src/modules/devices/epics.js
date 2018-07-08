import { tap, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { SEND_DEVICE_EVENT_START, sendDeviceEventComplete } from './actions'

const sendDeviceEventEpic = (action$, state$) => action$.pipe(
  ofType(SEND_DEVICE_EVENT_START),
  tap(() => {
  }),
  map(() => {
    return sendDeviceEventComplete()
  })
)

export default [
  sendDeviceEventEpic
]

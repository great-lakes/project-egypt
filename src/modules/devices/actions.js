export const SEND_DEVICE_EVENT_START = 'SEND_DEVICE_EVENT_START'
export const SEND_DEVICE_EVENT_COMPLETE = 'SEND_DEVICE_EVENT_COMPLETE'
export const ADD_DEVICE_CONNECTION = 'ADD_DEVICE_CONNECTION'

export function sendDeviceEventStart (value) {
  return {
    type: SEND_DEVICE_EVENT_START,
    payload: value
  }
}

export function sendDeviceEventComplete (status) {
  return {
    type: SEND_DEVICE_EVENT_COMPLETE,
    payload: status
  }
}

export function addDeviceConnection (deviceName, cs, ms) {
  return {
    type: ADD_DEVICE_CONNECTION,
    payload: {
      deviceName,
      cs,
      ms
    }
  }
}

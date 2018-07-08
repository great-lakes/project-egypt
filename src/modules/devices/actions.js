export const SEND_DEVICE_EVENT_START = 'SEND_DEVICE_EVENT_START'
export const SEND_DEVICE_EVENT_COMPLETE = 'SEND_DEVICE_EVENT_COMPLETE'
export const ADD_DEVICE = 'ADD_DEVICE'

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

export function addDevice (name, connectionString, jsonMessage) {
  return {
    type: ADD_DEVICE,
    payload: {
      name,
      connectionString,
      jsonMessage
    }
  }
}

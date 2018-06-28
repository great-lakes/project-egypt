export const ADD_DEVICE_CONNECTION = 'ADD_DEVICE_CONNECTION'

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

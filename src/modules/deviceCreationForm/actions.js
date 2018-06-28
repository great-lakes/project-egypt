export const SET_DEVICENAME = 'SET_DEVICENAME'
export const SET_FREQUENCY = 'SET_FREQUENCY'
export const SET_CONNECTION_STRING = 'SET_CS'

export function setDeviceName (deviceName) {
  return {
    type: SET_DEVICENAME,
    payload: deviceName
  }
}

export function setFrequencyString (ms) {
  return {
    type: SET_FREQUENCY,
    payload: ms
  }
}

export function setConnectionString (cs) {
  return {
    type: SET_CONNECTION_STRING,
    payload: cs
  }
}

/* name, frequency, device CS */

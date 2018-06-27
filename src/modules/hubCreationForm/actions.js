export const SET_HOSTNAME = 'SET_HOSTNAME'
export const SET_CONNECTION_STRING = 'SET_CS'

export function setHostname (name) {
  return {
    type: SET_HOSTNAME,
    payload: name
  }
}

export function setConnectionString (cs) {
  return {
    type: SET_CONNECTION_STRING,
    payload: cs
  }
}

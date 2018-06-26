export const HOSTNAME = 'hostname'
export const CONNECTION_STRING = 'cs'
export function modifyhostname (name) {
  return {
    type: HOSTNAME,
    payload: {name}
  }
}

export function modifyconnectionstring (cs) {
  return {
    type: CONNECTION_STRING,
    payload: {cs}
  }
}

export function addIotHubConnection (name, cs) {
  return {
    type: ADD_IOTHUB_CONNECTION,
    payload: {
      name,
      cs
    }
  }
}


export const ADD_HUB_CONNECTION = 'ADD_HUB_CONNECTION'
export const SET_HUB_CONNECTIONS = 'SET_HUB_CONNECTIONS'
export const SET_HUB_CONNECTIONS_FROM_LOCALSTORAGE = 'SET_HUB_CONNECTIONS_FROM_LOCALSTORAGE'

export function addHubConnection (name, cs) {
  return {
    type: ADD_HUB_CONNECTION,
    payload: {
      name,
      cs
    }
  }
}

export function setHubConnections (connectionsArray) {
  return {
    type: SET_HUB_CONNECTIONS,
    payload: connectionsArray
  }
}

export function setHubConnectionsFromLocalstorage () {
  return {
    type: SET_HUB_CONNECTIONS_FROM_LOCALSTORAGE
  }
}

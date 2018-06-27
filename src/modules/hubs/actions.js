
export const ADD_HUB_CONNECTION = 'ADD_HUB_CONNECTION'

export function addHubConnection (name, cs) {
  return {
    type: ADD_HUB_CONNECTION,
    payload: {
      name,
      cs
    }
  }
}

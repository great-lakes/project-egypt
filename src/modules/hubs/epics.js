/* global localStorage */
import { tap, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { ADD_HUB_CONNECTION } from './actions'
import { epicComplete } from '../../core/actions'
import { LOCALSTORAGE_HUB_CONNECTIONS_KEY } from '../../core/constants'

const addHubConnectionEpic = (action$, state$) => action$.pipe(
  ofType(ADD_HUB_CONNECTION),
  tap((action) => {
    const rawValue = localStorage.getItem(LOCALSTORAGE_HUB_CONNECTIONS_KEY) || '[]'
    const value = JSON.parse(rawValue)
    value.push(action.payload)
    localStorage.setItem(LOCALSTORAGE_HUB_CONNECTIONS_KEY, JSON.stringify(value))
  }),
  map((action) => {
    return epicComplete(action.type)
  })
)

export default [
  addHubConnectionEpic
]
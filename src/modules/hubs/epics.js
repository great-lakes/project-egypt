/* global localStorage */
import { tap, mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { of, concat } from 'rxjs'
import { ADD_HUB_CONNECTION } from './actions'
import { epicComplete } from '../../core/actions'
import { LOCALSTORAGE_HUB_CONNECTIONS_KEY } from '../../core/constants'
import { ADD_HUB_CONNECTION_FORM } from '../../core/forms'
import { reset as resetForm } from 'redux-form'

const addHubConnectionEpic = (action$, state$) => action$.pipe(
  ofType(ADD_HUB_CONNECTION),
  tap((action) => {
    const rawValue = localStorage.getItem(LOCALSTORAGE_HUB_CONNECTIONS_KEY) || '[]'
    const value = JSON.parse(rawValue)
    value.push(action.payload)
    localStorage.setItem(LOCALSTORAGE_HUB_CONNECTIONS_KEY, JSON.stringify(value))
  }),
  mergeMap((action) => {
    return concat(
      of(resetForm(ADD_HUB_CONNECTION_FORM)),
      of(epicComplete(action.type))
    )
  })
)

export default [
  addHubConnectionEpic
]

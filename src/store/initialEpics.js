import { mergeMap } from 'rxjs/operators'
import { epicComplete } from '../core/actions'
import { ofType } from 'redux-observable'
import { actions as hubsActions } from '../modules/hubs'
import { getObjLocalStorage } from '../core/utils'
import { LOCALSTORAGE_HUB_CONNECTIONS_KEY } from '../core/constants'

const {SET_HUB_CONNECTIONS_FROM_LOCALSTORAGE, setHubConnections} = hubsActions

const setHubConnectionsFromLocalStorage = (action$, state$) => action$.pipe(
  ofType(SET_HUB_CONNECTIONS_FROM_LOCALSTORAGE),
  mergeMap((action) => {
    const connections = getObjLocalStorage(LOCALSTORAGE_HUB_CONNECTIONS_KEY, '[]')
    return [
      setHubConnections(connections),
      epicComplete(action.type)
    ]
  })
)

export default [
  setHubConnectionsFromLocalStorage
]

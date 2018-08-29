import { actions } from '../modules/hubs'

export default (dispatch) => {
  dispatch(actions.setHubConnectionsFromLocalstorage())
}

import HubCreation from './HubCreation'
import { connect } from 'react-redux'
import {actions as hubsActions} from '../../../modules/hubs'

const { addHubConnection } = hubsActions

const mapStateToProps = (state, ownProps) => {
  /**
  using REDUX stores, it allows us to just access the reducer values
  by going to state.name.
  **/
  return {}
}

/**
In mapStateToProps we were mapping the state variables as properties to pass into our presentational component. In mapDispatchToProps we are mapping the action functions to our container to be able to pass it into our presentational component.
**/
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitForm: ({eventhubName, eventhubCs}) => {
      const action = addHubConnection(eventhubName, eventhubCs)
      console.log(action)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HubCreation)

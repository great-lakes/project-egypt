import HubCreation from './HubCreation'
import { connect } from 'react-redux'
import {actions as formActions} from '../../modules/hubCreationForm'
import {actions as hubsActions} from '../../modules/hubs'

const mapStateToProps = (state, ownProps) => {
  /**
  using REDUX stores, it allows us to just access the reducer values
  by going to state.name.
  **/
  const {hostname, cs} = state.hubCreationForm // {hostname, cs}
  return {
    hostname,
    cs
  }
}

/**
In mapStateToProps we were mapping the state variables as properties to pass into our presentational component. In mapDispatchToProps we are mapping the action functions to our container to be able to pass it into our presentational component.
**/
const mapDispatchToProps = (dispatch) => {
  return {
    onHostNameChange: (e) => {
      dispatch(formActions.setHostname(e.target.value))
    },
    onCSChange: (e) => {
      dispatch(formActions.setConnectionString(e.target.value))
    },
    onSubmitClick: (name, cs) => {
      dispatch(hubsActions.addHubConnection(name, cs))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HubCreation)

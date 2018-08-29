import DeviceCreation from './DeviceCreation'
import { connect } from 'react-redux'
import {actions as DevicesActions} from '../../../modules/devices'

const mapStateToProps = (state, ownProps) => {
  /**
  using REDUX stores, it allows us to just access the reducer values
  by going to state.name.
  **/
}

/**
In mapStateToProps we were mapping the state variables as properties to pass into our presentational component. In mapDispatchToProps we are mapping the action functions to our container to be able to pass it into our presentational component.
**/
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({deviceName, deviceCs}) => {
      dispatch(DevicesActions.addDeviceConnection(deviceName, deviceCs))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceCreation)

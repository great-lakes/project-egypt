import DeviceCreation from './DeviceCreation'
import { connect } from 'react-redux'
import {actions as formActions} from '../../modules/deviceCreationForm'
import {actions as DevicesActions} from '../../modules/devices'

const mapStateToProps = (state, ownProps) => {
  /**
  using REDUX stores, it allows us to just access the reducer values
  by going to state.name.
  **/
  const {deviceName, cs, ms} = state.deviceCreationForm
  return {
    deviceName,
    cs,
    ms
  }
}

/**
In mapStateToProps we were mapping the state variables as properties to pass into our presentational component. In mapDispatchToProps we are mapping the action functions to our container to be able to pass it into our presentational component.
**/
const mapDispatchToProps = (dispatch) => {
  return {
    onDeviceNameChange: (e) => {
      dispatch(formActions.setDeviceName(e.target.value))
    },
    onCSChange: (e) => {
      dispatch(formActions.setConnectionString(e.target.value))
    },
    onMSChange: (e) => {
      dispatch(formActions.setFrequencyString(e.target.value))
    },
    onSubmitClick: (deviceName, cs) => {
      dispatch(DevicesActions.addDeviceConnection(deviceName, cs))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceCreation)

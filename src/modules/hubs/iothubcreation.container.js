'use strict'
import React from 'react'
import { connect } from 'react-redux'
import HostName from './iothubcreation.presentation.js'
import * as actions from './iothubcreation.action.js'

// class IotHubCreation extends Component {
//   render () {
//     return (
//       <HostName
//         name={this.props.name}
//         modifyName={this.props.modifyhostname}
//      />
//     )
//   }
// }

const IotHubCreation = (props) => (<HostName
  name={props.name}
  modifyName={props.modifyhostname}
/>)

const mapStateToProps = (state, ownProps) => {
/**
using REDUX stores, it allows us to just access the reducer values
by going to state.name.
**/
  const {hostname} = state.name
  return { hostname }
}

/**
In mapStateToProps we were mapping the state variables as properties to pass into our presentational component. In mapDispatchToProps we are mapping the action functions to our container to be able to pass it into our presentational component.
**/
const mapDispatchToProps = (dispatch) => {
  return {
    modifyhostname: (name) => {
      dispatch(actions.modifyhostname(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IotHubCreation)

import CustomGenerator from './CustomGenerator'
import { connect } from 'react-redux'
// import {actions as formActions} from '../../modules/generators'

const mapStateToProps = (state, ownProps) => {
  /**
  using REDUX stores, it allows us to just access the reducer values
  by going to state.name.
  **/
  return {
    // Get the array of generators from store

  }
}

/**
  In mapStateToProps we were mapping the state variables as properties to pass into our presentational component. In mapDispatchToProps we are mapping the action functions to our container to be able to pass it into our presentational component.
**/
const mapDispatchToProps = (dispatch) => {
  return {
    // OnGeneratorSelect dispatch the action in the generators module
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomGenerator)

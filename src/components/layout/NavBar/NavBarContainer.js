import NavBar from './NavBar'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    hubs: state.hubs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

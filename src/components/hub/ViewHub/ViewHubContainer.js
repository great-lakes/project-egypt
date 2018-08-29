import ViewHub from './ViewHub'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const {name, cs} = state.hubCreationForm // {hostname, cs}
  return {
    name,
    cs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewHub)

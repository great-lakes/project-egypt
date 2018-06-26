/**
 * the dumb component which will use the props passed in from the smart component based on a user's actions
 */
'use strict'
import React, { Component } from 'react'

class HostName extends Component {
  render () {
    return (<div>
      <input type='text' value={this.props.name} onChange={name => this.props.modifyName(name)} />
    </div>
    )
  }
}
export default HostName

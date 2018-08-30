import React from 'react'
import styles from './AddHub.module.css'
import HubCreation from '../HubCreation'
import classnames from 'classnames'

export default () => (
  <div className={classnames([styles.grid])}>
    <div id='addahub'>
      <HubCreation />
    </div>
  </div>
)

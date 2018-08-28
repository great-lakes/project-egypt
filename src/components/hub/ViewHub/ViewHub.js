import React from 'react'
import './ViewHub.css'

export default ({match}) => (
  <div className='grid'>
    <div id='view-hub'>
      <h3> View Hub: {match.params.name} </h3>
    </div>
  </div>
)

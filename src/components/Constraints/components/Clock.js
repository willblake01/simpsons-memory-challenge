import React from 'react'
import { msToTime } from '../../../utils/Conversions'

const Clock = () => {
  const time = 600000

  return (
    <div className="flex-column">
      <h1>Clock</h1>
      {<h1>{msToTime(time)}</h1>}
    </div>
  )
}

export default Clock

import React, { useEffect, useState } from 'react'
import { msToTime } from '../../../utils/Conversions'
import { useLocalStorageState } from '../../utils'

const Clock = () => {
  const [clock, setClock] = useLocalStorageState('time', 480000)

  useEffect(() => {
    const interval = setInterval(() => {
      if (clock > 0) {
        setClock(clock - 1000)
      }
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className="flex-column">
      <h1>Clock</h1>
      {<h1>{msToTime(clock)}</h1>}
    </div>
  )
}

export default Clock

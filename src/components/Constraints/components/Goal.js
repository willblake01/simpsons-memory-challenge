import React, { useContext } from 'react'
import { Context } from '../../../context'
import { Counter } from './../components'

const Goal = () => {
  const { goal } = useContext(Context)

  return (
    <div className="flex-column">
      <h1>Goal</h1>
      <h1>{goal}</h1>
      {/* <Counter /> */}
    </div>
  )
}

export default Goal

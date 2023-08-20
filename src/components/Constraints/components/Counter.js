import React, { useContext } from 'react'
import { Context } from '../../../context'
import { LargeButton, useLocalStorageState } from '../../utils'

const Counter = () => {
  const { goal, setGoal } = useContext(Context)

  const increment = () => {
    if (goal >= 0) {
      setGoal(goal + 1)
    }
  }
  const decrement = () => {
    if (goal > 0) {
      setGoal(goal - 1)
    }
  }

  return (
    <div className="flex-row">
      <LargeButton
        text="Increment"
        className="large-button"
        onClick={increment}
      />
      <LargeButton
        text="Decrement"
        className="large-button"
        onClick={decrement}
      />
    </div>
  )
}

export default Counter

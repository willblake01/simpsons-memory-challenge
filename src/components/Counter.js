import React from 'react'
import LargeButton from './LargeButton'

const Counter = ({ count, updateCount }) => {
  const increment = () => updateCount(count + 1)

  const decrement = () => updateCount(count - 1)

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

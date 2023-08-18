import React from 'react'
import LargeButton from './LargeButton'

const Counter = ({ count, updateCount }) => {
  const increment = () => updateCount(count + 1)

  const decrement = () => updateCount(count - 1)

  return (
    <div className="flex-row">
      <LargeButton
        buttonText="Increment"
        buttonClass="large-button"
        onClickEvent={increment}
      />
      <LargeButton
        buttonText="Decrement"
        buttonClass="large-button"
        onClickEvent={decrement}
      />
    </div>
  )
}

export default Counter

import React, { useState } from 'react'
import LargeButton from './LargeButton'

const Counter = ({ count, updateCount }) => {
  const incrementButtonText = useState('Increment')
  const decrementButtonText = useState('Decrement')

  const increment = () => updateCount(count + 1)

  const decrement = () => updateCount(count - 1)

  return (
    <div className="counter-buttons">
      <LargeButton buttonText={incrementButtonText} onClickEvent={increment} />
      <LargeButton buttonText={decrementButtonText} onClickEvent={decrement} />
    </div>
  )
}

export default Counter

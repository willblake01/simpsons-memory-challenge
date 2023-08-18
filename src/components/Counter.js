import React from 'react'
import { useLocalStorageState } from '../utils/useLocalStorageState'
import LargeButton from '../utils/Buttons/LargeButton'

const Counter = () => {
  const [count, setCount] = useLocalStorageState('count', 0)

  const updateCount = newCount => {
    let countCopy = count
    countCopy = newCount
    setCount(countCopy)
  }

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

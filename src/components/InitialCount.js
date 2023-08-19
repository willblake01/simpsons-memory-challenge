import React, { useState } from 'react'
import { LargeButton, UserInput } from '../utils'

const InitialCount = ({ count }) => {
  const [inputType] = useState('number')
  const [inputPattern] = useState('[0-9]')
  const [inputMode] = useState('numeric')
  const [inputPlaceholder] = useState('Please Enter a Number')
  const [inputId] = useState('initial-count-input')
  const [countInput, setCountInput] = useState(0)

  const setInitialCount = initialCount => {
    let countCopy = count
    countCopy = initialCount
    // setCount(countCopy)
  }

  const handleCountSubmit = e => {
    if (countInput !== count) {
      e.preventDefault()
      setInitialCount(countInput)
      setCountInput(count)
      document.getElementById(inputId).value = null
    }
  }

  const handleCountInput = e => {
    setCountInput(parseInt(e.target.value, 10))
  }

  return (
    <form className="form">
      <h1>How Many Did You Get!?</h1>
      <div className="flex-row">
        <UserInput
          inputType={inputType}
          inputPattern={inputPattern}
          inputMode={inputMode}
          countInput={countInput}
          handleCountInput={handleCountInput}
          inputPlaceholder={inputPlaceholder}
          inputId={inputId}
          onChangeEvent={handleCountInput}
        />
        <LargeButton
          text="Submit"
          className="large-button"
          onClick={handleCountSubmit}
        />
      </div>
    </form>
  )
}

export default InitialCount

import React, { useState } from 'react'
import UserInput from './UserInput'
import LargeButton from './LargeButton'

const InitialCountForm = ({ count, setInitialCount }) => {
  const [inputType] = useState('number')
  const [inputPattern] = useState('[0-9]')
  const [inputMode] = useState('numeric')
  const [inputPlaceholder] = useState('Please Enter a Number')
  const [inputId] = useState('initial-count-input')
  const [countInput, setCountInput] = useState(0)
  const [submitButtonText] = useState('Submit')

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
    <div className="form">
      <h1>How Many Did You Get!?</h1>
      <form className="form-container">
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
          buttonText={submitButtonText}
          onClickEvent={handleCountSubmit}
        />
      </form>
    </div>
  )
}

export default InitialCountForm

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LargeButton, UserInput } from './utils'

const InitialCount = () => {
  let navigate = useNavigate()

  const [countInput, setCountInput] = useState(0)

  const handleCountSubmit = () => {
    navigate('/challenge')
  }

  const handleCountInput = e => {
    setCountInput(parseInt(e.target.value, 10))
  }

  return (
    <form className="form">
      <h1>How Many characters do you think you can name?</h1>
      <div className="flex-row">
        <UserInput
          type="number"
          pattern="[0-9]"
          mode="numeric"
          placeholder="Please Enter a Number"
          id="initial-count-input"
          onChange={handleCountInput}
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

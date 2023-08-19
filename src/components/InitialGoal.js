import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context'
import { LargeButton, UserInput } from './utils'

const InitialGoal = () => {
  let navigate = useNavigate()
  const { setGoal } = useContext(Context)

  const handleGoalSubmit = () => {
    navigate('/challenge')
  }

  const handleGoalInput = e => {
    setGoal(parseInt(e.target.value, 10))
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
          onChange={handleGoalInput}
        />
        <LargeButton
          text="Submit"
          className="large-button"
          onClick={handleGoalSubmit}
        />
      </div>
    </form>
  )
}

export default InitialGoal

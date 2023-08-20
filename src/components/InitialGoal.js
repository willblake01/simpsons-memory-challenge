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
      <h1>
        How many characters can you name in 8 minutes? You can revise after the
        challenge starts but choose carefully, you can only do this once in the
        first 5 minutes! To score points for the challenge you must at least
        reach your goal.
      </h1>
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

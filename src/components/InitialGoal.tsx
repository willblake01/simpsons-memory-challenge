import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context'
import { LargeButton, UserInput } from './utils'

interface GoalInputEvent extends React.ChangeEvent<HTMLInputElement> {}
interface InitialGoalContext {
  setClock: (value: number) => void
  setGoal: (value: number) => void
  setRawList: (value: string[]) => void
  setRevisionsRemaining: (value: number) => void
}

const InitialGoal = () => {
  const navigate = useNavigate()

  const gamePrompt =
    'How many characters can you name in 8 minutes? You can revise after the challenge starts but choose carefully, you can only do this once in the first 5 minutes! To score points for the challenge you must reach your goal. You will score 10 base points for every character in your goal and 1 bonus point for each additional character.'

  const {
    setClock,
    setGoal,
    setRawList,
    setRevisionsRemaining
  }: InitialGoalContext = useContext(Context)

  const handleGoalInput = (e: GoalInputEvent) => {
    const { value } = e.target
    setGoal(parseInt(value, 10))
  }

  const startChallenge = () => {
    Promise.all([
      setRawList([]),
      setRevisionsRemaining(1),
      setClock(480000)
    ]).then(() => navigate('/challenge'))
  }

  return (
    <form className="form">
      <h1>{gamePrompt}</h1>
      <div className="flex-row">
        <UserInput
          type="number"
          pattern="[0-9]"
          inputMode="numeric"
          placeholder="Please Enter a Number"
          id="initial-count-input"
          onChange={handleGoalInput}
        />
        <LargeButton
          text="Submit"
          className="large-button"
          onClick={startChallenge}
        />
      </div>
    </form>
  )
}

export default InitialGoal

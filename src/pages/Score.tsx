import React, { Fragment, useContext, useEffect } from 'react'
import { useLocalStorageState } from '../components/utils'
import { Context } from '../context'
import { useNavigate } from 'react-router-dom'
import lisa from '../public/images/lisa.png'
import moe from '../public/images/moe.png'
import nelson from '../public/images/nelson.png'
import { LargeButton } from '../components/utils'

interface ScoreContext {
  goal: number
  rawList: string[]
}

const Score = () => {
  const navigate = useNavigate()

  const { goal, rawList }: ScoreContext = useContext(Context)

  const [score, setScore] = useLocalStorageState('score', 0)

  const calculateScore = () => {
    // A player must reach their goal to score points.
    if (rawList.length >= goal) {
      // Base score is 10 points per item in the goal.
      const baseScore = goal * 10
      // Additional 1 point bonus for each item over the goal.
      const additionalScore = rawList.length - goal
      const totalScore = baseScore + additionalScore
      setScore(totalScore)
    } else {
      setScore(0)
    }
  }

  const restartChallenge = () => {
    setScore(0)
    navigate('/')
  }

  const handleScoreView = () => {
    if (rawList.length === 0) {
      return (
        <Fragment>
          <h1>Come on now, you didn't even try.</h1>
          <img src={nelson} alt="Nelson Muntz" />
        </Fragment>
      )
    } else if (rawList.length > 0 && rawList.length < goal) {
      return (
        <Fragment>
          <h1>Smh. Try to hit your goal next time...</h1>
          <img src={moe} alt="Moe" />
        </Fragment>
      )
    } else if (score > 0 && rawList.length > 0) {
      return (
        <Fragment>
          <h1>{`Score: ${score}`}</h1>
          <img src={lisa} alt="Lisa Simpson" />
        </Fragment>
      )
    } else {
      return <h1>Something went wrong</h1>
    }
  }

  useEffect(() => {
    calculateScore()
  }, [rawList])

  return (
    <Fragment>
      {handleScoreView()}
      <LargeButton
        text="Restart Challenge"
        className="large-button"
        onClick={restartChallenge}
      />
    </Fragment>
  )
}

export default Score

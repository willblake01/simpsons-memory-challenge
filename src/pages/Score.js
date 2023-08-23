import React, { Fragment, useContext, useEffect } from 'react'
import { useLocalStorageState } from './../components/utils'
import { Context } from '../context'
import { useNavigate } from 'react-router-dom'
import lisa from '../public/images/lisa.png'
import nelson from '../public/images/nelson.png'
import { LargeButton } from '../components/utils'

const Score = () => {
  const navigate = useNavigate()

  const { goal, rawList, setRawList } = useContext(Context)

  const [score, setScore] = useLocalStorageState('score', 0)

  const calculateScore = () => {
    // A player must reach their goal to score points.
    if (rawList.length >= goal) {
      const baseScore = goal * 10
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

  useEffect(() => {
    calculateScore()
  }, [rawList])

  return (
    <Fragment>
      {score > 0 ? (
        <Fragment>
          <h1>{`Score: ${score}`}</h1>
          <img src={lisa} alt="Lisa Simpson" />
          <LargeButton
            text="Restart Challenge"
            className="large-button"
            onClick={restartChallenge}
          />
        </Fragment>
      ) : (
        <Fragment>
          <h1>Come on now, you didn't even try.</h1>
          <img src={nelson} alt="Nelson Muntz" />
          <LargeButton
            text="Restart Challenge"
            className="large-button"
            onClick={restartChallenge}
          />
        </Fragment>
      )}
    </Fragment>
  )
}

export default Score

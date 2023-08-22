import React, { Fragment, useContext } from 'react'
import { Context } from '../context'
import { useNavigate } from 'react-router-dom'
import nelson from '../public/images/nelson.png'
import lisa from '../public/images/lisa.png'
import { LargeButton } from '../components/utils'

const Score = () => {
  const navigate = useNavigate()

  const { score, setScore } = useContext(Context)

  const restartChallenge = () => {
    setScore(0)
    navigate('/')
  }

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

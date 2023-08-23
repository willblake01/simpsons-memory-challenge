import React, { Fragment, useContext, useEffect, useState } from 'react'
import '../public/styles/app.css'
import { Context } from '../context'
import { useNavigate } from 'react-router-dom'
import { Constraints, Hints, Lists } from '../components'
import { LargeButton } from '../components/utils'

const Challenge = () => {
  const { clock, setClock } = useContext(Context)

  const navigate = useNavigate()

  const [displayHints, setDisplayHints] = useState(true)

  const endChallenge = () => {
    setClock(0)
    navigate('/score')
  }

  useEffect(() => {
    if (clock === 0) {
      endChallenge()
    }
  })

  return (
    <Fragment>
      <Constraints />
      {displayHints ? (
        <Hints setDisplayHints={setDisplayHints} />
      ) : (
        <LargeButton
          text="Show Hints"
          className="large-button"
          onClick={() => setDisplayHints(true)}
        />
      )}
      <Lists />
      <LargeButton
        text="Finished"
        className="large-button"
        onClick={endChallenge}
      />
    </Fragment>
  )
}

export default Challenge

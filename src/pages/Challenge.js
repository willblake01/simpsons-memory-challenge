import React, { Fragment, useState } from 'react'
import '../public/styles/app.css'
import { useNavigate } from 'react-router-dom'
import { Constraints, Hints, Lists } from '../components'
import { LargeButton } from '../components/utils'

const Challenge = () => {
  const navigate = useNavigate()

  const [displayHints, setDisplayHints] = useState(true)

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
        onClick={() => navigate('/score')}
      />
    </Fragment>
  )
}

export default Challenge

import React, { Fragment, useContext, useState } from 'react'
import { Context } from '../../../context'
import { Counter } from './../components'
import { SmallButton } from '../../../components/utils'

const Goal = () => {
  const { goal } = useContext(Context)

  const [revise, setRevise] = useState(false)

  const toggleRevise = () => setRevise(!revise)

  return (
    <div className="flex-column">
      <h1>Goal</h1>
      <h1>{goal}</h1>
      {revise ? (
        <Fragment>
          <Counter />
          <SmallButton
            text="Set"
            className="small-button"
            onClick={toggleRevise}
          />
        </Fragment>
      ) : (
        <SmallButton
          text="Revise"
          className="small-button"
          onClick={toggleRevise}
        />
      )}
    </div>
  )
}

export default Goal
